## Deploiement d'un clé avec la config Firebase

Permet de récupérer le fichier de config pour firestore.

```batch
cat server/serviceAccount.json | base64
```

Copier la valeur et saisir la commande suivante pour setter la variable.

```batch
firebase functions:secrets:set CUSTOM_FIREBASE_ADMIN
```