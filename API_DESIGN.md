# CONCEPTION DE L'API


### Model / Ressource
#### Vehicule
 - Marque: string
 - Model: string
 - immatriculation: string
 - annee: number
 - prixLocation: number


### EndPoints / Points d'extremites
### CRUD

1. Creer un vehicule
HTTP POST
URL: /vehicule
Request body: entité / informations du vehicule

Response: 201: Vehicule crée
          500: Erreur d'application

2. Mise a jour
HTTP PUT
URL: /vehicule/:id
Request body: entité / informations du vehicule

Response: 200: Vehicule mis a jour.
          404: Vehicule non trouvé
          500: Erreur d'application

3. Suppression
HTTP DELETE
URL: /vehicule/:id

Response: 204: ""
          500: Erreur d'application


4. Lire les informations d'un vehicule a l'aide de son identifiant
HTTP GET
URL: /vehicule/id

Response:  200: Vehicule ok
           404: Vehicule non trouvé
           500: Erreur d'application


5. Afficher les vehicules
HTTP: GET
URL: /vehicules

Response: 200: Une liste de vehicule
          404: Vehicules non trouvés
          500: Erreur d'application

6. Lire les information d'un vehicule à l'aide de son numero d'immatriculation
HTTP: GET
URL /vehicule/search/:immatriculation

Reponse: 200: Vehicule ok
         404: Vehicule non trouvé
         500: Erreur d'application


7. Recuperer les vehicules par prix. (filter les vehicule grace au prix max)
HTTP: GET
URL /vehicule/price/:prixMax

Reponse: 200: Une liste de Vehicule
         404: Vehicules non trouvés
         500: Erreur d'application
