import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it, vi } from "vitest";
import ImageInput from "./ImageInput.vue";

describe('ImageInput', () => {
  it('rend correctement avec les props de base', async () => {
    const wrapper = await mountSuspended(ImageInput, {
      props: {
        label: 'Upload',
        name: 'file-upload',
        onChange: vi.fn(),
      },
    });

    expect(wrapper.find('label').text()).toBe('Upload');
    expect(wrapper.find('svg').exists()).toBe(true); // SVG doit être visible par défaut
    expect(wrapper.find('img').exists()).toBe(false); // Pas d’image tant qu’aucun fichier n’est uploadé
  });

  it('affiche l’image après un upload de fichier', async () => {
    const mockFile = new File(['dummy content'], 'test.png', { type: 'image/png' });
    const wrapper = await mountSuspended(ImageInput, {
      props: {
        label: 'Upload',
        name: 'file-upload',
        onChange: vi.fn(),
      },
    });

    // Récupérer l'input file
    const input = wrapper.find('input[type="file"]');

    // Créer un DataTransfer pour simuler l'upload d'un fichier
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(mockFile);

    // Définir la propriété `files` sur l'élément input
    Object.defineProperty(input.element, 'files', {
      value: dataTransfer.files,
    });

    // Déclencher l'événement change
    await input.trigger('change');

    // Vérifier que l’image est bien affichée à la place du SVG
    expect(wrapper.find('svg').exists()).toBe(false);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toContain('blob:'); // L'URL doit être un blob temporaire
  });

  it('appelle la fonction onChange avec le bon fichier', async () => {
    const onChangeMock = vi.fn();
    const mockFile = new File(['dummy content'], 'test.jpg', { type: 'image/jpeg' });

    const wrapper = await mountSuspended(ImageInput, {
      props: {
        label: 'Upload',
        name: 'file-upload',
        onChange: onChangeMock,
      },
    });

    const input = wrapper.find('input[type="file"]');
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(mockFile);

    Object.defineProperty(input.element, 'files', {
      value: dataTransfer.files,
    });

    await input.trigger('change');

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(mockFile);
  });

  it('accepte uniquement les fichiers avec les extensions fournies', async () => {
    const wrapper = await mountSuspended(ImageInput, {
      props: {
        label: 'Upload',
        name: 'file-upload',
        accept: ['image/png', 'image/jpeg'],
        onChange: vi.fn(),
      },
    });

    const input = wrapper.find('input[type="file"]');
    expect(input.attributes('accept')).toBe('image/png,image/jpeg');
  });

  it('clique sur l’input file en cliquant sur le bouton', async () => {
    const wrapper = await mountSuspended(ImageInput, {
      props: {
        label: 'Upload',
        name: 'file-upload',
        onChange: vi.fn(),
      },
    });

    const input = wrapper.find('input[type="file"]');
    const spy = vi.spyOn(input.element as HTMLElement, 'click');

    await wrapper.find('button').trigger('click');

    expect(spy).toHaveBeenCalled();
  });

  it('n’affiche pas d’image si un fichier invalide est uploadé', async () => {
    const invalidFile = new File(['dummy content'], 'test.txt', { type: 'text/plain' });
    const wrapper = await mountSuspended(ImageInput, {
      props: {
        label: 'Upload',
        name: 'file-upload',
        accept: ['image/png', 'image/jpeg'], // Seuls ces types sont acceptés
        onChange: vi.fn(),
      },
    });

    const input = wrapper.find('input[type="file"]');
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(invalidFile);

    Object.defineProperty(input.element, 'files', {
      value: dataTransfer.files,
    });

    await input.trigger('change');

    expect(wrapper.find('svg').exists()).toBe(true); // SVG doit rester visible
    expect(wrapper.find('img').exists()).toBe(false); // Pas d'image affichée
  });
});