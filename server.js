PROJET : MSDMA
VERSION : FINALISATION DU PROJET EXISTANT

IMPORTANT :
Tu travailles sur le projet MSDMA EXISTANT qui se trouve dans ce dépôt.

NE RECOMMENCE PAS LE PROJET DEPUIS ZÉRO.
NE CRÉE PAS UNE SIMPLE MAQUETTE.
NE SUPPRIME PAS les fonctionnalités existantes qui fonctionnent.
NE REMPLACE PAS le projet par une nouvelle application différente.

PREMIÈRE ÉTAPE OBLIGATOIRE :
Analyse entièrement le contenu actuel du dépôt.

Analyse :
- tous les fichiers ;
- l'architecture ;
- le frontend ;
- le backend ;
- les routes API ;
- la base de données ;
- l'authentification ;
- les rôles ;
- les pages ;
- les composants ;
- les fonctionnalités existantes ;
- les paiements ;
- l'administration ;
- les erreurs ;
- les dépendances ;
- la configuration de déploiement.

Ensuite, corrige et complète directement le projet existant.

==================================================
IDENTITÉ MSDMA
==================================================

Nom : MSDMA

Slogan :
« Des services, des personnes, une seule application. »

Langue :
Français

Devise :
GNF

Design :
- bleu marine ;
- blanc ;
- jaune ;
- moderne ;
- professionnel ;
- mobile-first ;
- cartes arrondies ;
- boutons clairs ;
- interface simple et rapide.

L'application doit fonctionner correctement sur :
- iPhone ;
- Android ;
- navigateur mobile ;
- ordinateur.

MSDMA est une marketplace qui met en relation :
- les clients qui recherchent des services ;
- les prestataires qui proposent des services ;
- les entreprises/commerçants qui peuvent promouvoir leurs services.

==================================================
1. AUDIT AVANT MODIFICATION
==================================================

Avant de modifier quoi que ce soit :

1. Analyse tout le code.
2. Identifie le framework.
3. Identifie le backend.
4. Identifie la base de données.
5. Identifie les routes.
6. Identifie les pages.
7. Identifie les composants.
8. Identifie l'authentification.
9. Identifie les rôles.
10. Identifie les fonctionnalités déjà présentes.
11. Identifie les fonctionnalités incomplètes.
12. Identifie les bugs.
13. Identifie les problèmes de sécurité.
14. Identifie les données fictives.
15. Identifie les doublons.

Ne casse pas ce qui fonctionne.

Si une fonctionnalité existe déjà :
CONSERVE-LA ET AMÉLIORE-LA.

==================================================
2. AUTHENTIFICATION
==================================================

L'application doit permettre :

- inscription ;
- connexion ;
- déconnexion ;
- récupération du mot de passe ;
- changement du mot de passe ;
- sessions sécurisées ;
- protection des routes privées.

IMPORTANT POUR CETTE VERSION :

Supprimer le blocage lié à la vérification obligatoire de l'e-mail.

L'utilisateur doit pouvoir :
- créer son compte ;
- se connecter directement avec e-mail + mot de passe.

Ne jamais afficher de code de vérification obligatoire avant la connexion.

Ne jamais exposer les mots de passe.

Les mots de passe doivent être hashés de manière sécurisée.

==================================================
3. RÔLES
==================================================

Prévoir :

USER
PROVIDER / PRESTATAIRE
ADMIN

Le rôle ADMIN doit être vérifié côté serveur.

Un utilisateur normal ne doit jamais pouvoir devenir ADMIN en modifiant le navigateur ou une requête.

==================================================
4. PROFIL UTILISATEUR
==================================================

Chaque profil doit pouvoir contenir :

- photo ;
- nom ;
- téléphone ;
- e-mail ;
- présentation ;
- ville/zone ;
- services proposés ;
- note ;
- nombre de missions réalisées ;
- publications ;
- abonnés ;
- abonnements ;
- avis.

Menu du profil :

- Mon profil
- Mes tâches
- Mes services
- Mes publications
- Mes messages
- Mes notifications
- Mon portefeuille
- Mes transactions
- Paramètres
- Confidentialité
- Aide
- Déconnexion

==================================================
5. ACCUEIL
==================================================

Créer/améliorer l'accueil MSDMA.

Afficher :

Bonjour, [nom]

Barre de recherche :

« Rechercher un service… »

Catégories :

- Livraison
- Courses
- Transport
- Ménage
- Réparation
- Informatique
- Aide à domicile
- Autres

Afficher également :

- tâches récentes ;
- services populaires ;
- services recommandés ;
- publications récentes ;
- contenus sponsorisés.

Bouton :

« Publier une tâche »

==================================================
6. MARKETPLACE DE SERVICES
==================================================

Un prestataire doit pouvoir créer un service.

Champs :

- titre ;
- description ;
- catégorie ;
- prix en GNF ;
- zone de service ;
- photos ;
- vidéo si supportée ;
- disponibilité ;
- informations complémentaires.

Les données doivent être réellement enregistrées en base de données.

Pas de faux boutons.

Pas de fausses données.

==================================================
7. PUBLICATION D'UNE TÂCHE
==================================================

Un client doit pouvoir publier une tâche.

Champs :

- service recherché ;
- description ;
- lieu de départ ;
- lieu d'arrivée si nécessaire ;
- budget en GNF ;
- date ;
- heure ;
- informations complémentaires ;
- photo si nécessaire.

Bouton :

« Publier la tâche »

Statuts :

PUBLISHED
ACCEPTED
IN_PROGRESS
COMPLETED
CONFIRMED
CANCELLED

Une tâche ne doit jamais pouvoir être acceptée simultanément par plusieurs prestataires.

Prévoir :
- historique ;
- annulation ;
- confirmation ;
- notifications.

==================================================
8. DÉTAIL D'UNE TÂCHE
==================================================

Afficher :

- service ;
- description ;
- prix ;
- localisation ;
- client ;
- note ;
- date/heure ;
- statut.

Bouton :

« Accepter la tâche »

Après acceptation :

- afficher le prestataire ;
- afficher le statut ;
- permettre le suivi ;
- permettre la messagerie.

==================================================
9. SUIVI DE MISSION
==================================================

Créer une page de suivi.

Étapes :

1. Mission acceptée
2. Mission en cours
3. Mission terminée
4. Mission confirmée

Afficher si disponible :

- distance ;
- temps estimé ;
- localisation nécessaire ;
- bouton contacter.

Ne jamais exposer inutilement la localisation exacte.

==================================================
10. MESSAGERIE
==================================================

Créer une vraie messagerie.

Fonctions :

- conversations ;
- messages ;
- messages non lus ;
- date/heure ;
- notifications ;
- signalement ;
- blocage si nécessaire.

Un utilisateur ne doit pouvoir lire que ses propres conversations.

==================================================
11. ESPACE DÉCOUVERTE / SOCIAL
==================================================

Créer une section :

« Découvrir »

Avec :

- Pour vous
- Abonnements

Les utilisateurs peuvent publier :

- photos ;
- vidéos ;
- services ;
- offres ;
- résultats de prestations ;
- contenu professionnel.

Chaque publication doit pouvoir avoir :

- J'aime ;
- commentaire ;
- partage ;
- enregistrement ;
- abonnement au profil.

Tout doit être connecté à la base de données.

Les compteurs doivent être réels.

==================================================
12. NOTIFICATIONS
==================================================

Créer un véritable centre de notifications.

Notifications pour :

- nouveau message ;
- nouveau like ;
- nouveau commentaire ;
- nouvel abonné ;
- tâche acceptée ;
- tâche annulée ;
- tâche terminée ;
- paiement ;
- paiement confirmé ;
- paiement échoué ;
- remboursement ;
- nouvelle évaluation ;
- publicité ;
- notification système.

Afficher :

- lu/non lu ;
- date ;
- action associée.

Ajouter :

« Tout marquer comme lu »

Le compteur doit être dynamique.

==================================================
13. ÉVALUATIONS
==================================================

Après une mission réellement terminée et confirmée :

permettre :

- note de 1 à 5 étoiles ;
- commentaire ;
- date.

Empêcher :

- double évaluation ;
- fausse évaluation sans mission réelle.

Calculer automatiquement la moyenne.

==================================================
14. PAIEMENT MVP — IMPORTANT
==================================================

POUR CETTE VERSION :

NE PAS UTILISER CINETPAY.

NE PAS DEMANDER DE CLÉ CINETPAY.

NE PAS BLOQUER L'APPLICATION À CAUSE DE CINETPAY.

Le paiement est MANUEL pour le MVP.

Lors du checkout, afficher exactement :

« Paiement par dépôt Orange Money / MTN / Wave au numéro :
613 34 06 90 (MSDMA).

Montant exact : [prix du service].

Après dépôt, le client doit cliquer sur le bouton
“J’AI PAYÉ”. »

Afficher le montant exact en GNF.

Bouton :

« J’AI PAYÉ »

Lorsque le client clique :

le statut devient :

« En attente de confirmation admin »

Le client doit voir clairement que le paiement attend la confirmation de l'administrateur.

==================================================
15. CONFIRMATION ADMIN DU PAIEMENT
==================================================

Dans l'espace ADMIN :

Afficher les paiements :

« En attente de confirmation »

Pour chaque paiement :

- client ;
- prestataire ;
- service ;
- montant ;
- date ;
- référence de commande ;
- statut.

Bouton :

« Confirmer réception paiement »

Lorsque l'admin confirme :

le statut devient :

« Payé »

Le prestataire reçoit une notification :

« Nouvelle mission payée »

Prévoir également l'ouverture de WhatsApp avec ce message si possible.

IMPORTANT :
Sans API WhatsApp officielle, ne prétends pas envoyer automatiquement un message silencieux.
Utilise uniquement une ouverture WhatsApp avec message prérempli si cette fonction est disponible.

==================================================
16. FIN DE MISSION ET PAIEMENT DU PRESTATAIRE
==================================================

Lorsque le client clique :

« Travail terminé »

La mission passe à l'étape appropriée.

Dans ADMIN afficher :

« Transférer au prestataire »

Calcul obligatoire :

Commission MSDMA = 10 %

Montant prestataire = 90 %

Exemple :

Prix :
100 000 GNF

Commission MSDMA :
10 000 GNF

Prestataire :
90 000 GNF

Le calcul doit être effectué côté serveur.

L'interface doit afficher :

Montant total
Commission MSDMA
Montant à transférer au prestataire

Le transfert est MANUEL pour le MVP.

Ne jamais prétendre qu'un transfert automatique a été effectué.

==================================================
17. COMMISSION MSDMA
==================================================

Commission officielle :

10 %

ET NON 5 %.

Le pourcentage doit être centralisé côté serveur.

Le navigateur ne doit jamais pouvoir modifier la commission.

Pour chaque transaction enregistrer :

- montant brut ;
- commission ;
- montant net prestataire ;
- devise ;
- utilisateur ;
- prestataire ;
- commande ;
- date ;
- statut.

Devise :

GNF

==================================================
18. PORTEFEUILLE
==================================================

Créer :

« Mon portefeuille »

Afficher :

- solde disponible ;
- revenus ;
- commissions ;
- paiements en attente ;
- paiements terminés ;
- remboursements ;
- transactions.

Un utilisateur ne doit jamais pouvoir modifier directement son solde.

Les montants doivent venir des transactions validées.

==================================================
19. TRANSACTIONS
==================================================

Créer/compléter une vraie table :

transactions

Avec :

id
user_id
provider_id
task_id
payment_provider
transaction_reference
gross_amount
commission_amount
provider_net_amount
currency
status
created_at
updated_at

Empêcher les doublons.

Utiliser des identifiants uniques.

==================================================
20. PUBLICITÉ / SPONSORISATION
==================================================

MSDMA doit pouvoir gagner de l'argent avec les publicités.

Permettre une campagne :

- publication/service/profil ;
- budget ;
- durée ;
- audience ;
- catégorie ;
- zone.

Afficher clairement :

« Sponsorisé »

Statistiques :

- impressions ;
- vues ;
- clics ;
- interactions ;
- dépenses ;
- statut.

Statuts :

DRAFT
PENDING
ACTIVE
PAUSED
COMPLETED
CANCELLED

==================================================
21. ADMIN — ESPACE PRIVÉ
==================================================

Créer :

/admin

L'accès doit être strictement protégé côté serveur.

Seul le compte administrateur autorisé doit pouvoir accéder au tableau de bord.

Tous les autres utilisateurs qui tentent d'aller sur /admin doivent être refusés ou redirigés vers l'accueil.

NE JAMAIS protéger /admin uniquement avec une condition frontend.

==================================================
22. ADMIN — DASHBOARD
==================================================

Créer un tableau de bord avec :

- nombre total d'utilisateurs ;
- nombre de prestataires ;
- tâches/courses du jour ;
- revenus totaux en GNF ;
- commissions MSDMA ;
- paiements en attente ;
- paiements confirmés ;
- missions en cours ;
- missions terminées.

==================================================
23. ADMIN — UTILISATEURS
==================================================

Afficher :

- nom ;
- téléphone ;
- e-mail ;
- date d'inscription ;
- rôle ;
- statut.

Actions :

- consulter ;
- bloquer ;
- débloquer ;
- suspendre si nécessaire.

==================================================
24. ADMIN — PRESTATAIRES
==================================================

Afficher :

- nom ;
- téléphone ;
- véhicule si applicable ;
- type de véhicule ;
- statut.

Statuts :

EN ATTENTE
ACCEPTÉ
REFUSÉ

Actions :

« Accepter »

« Refuser »

==================================================
25. ADMIN — COMMANDES / COURSES
==================================================

Afficher :

- client ;
- prestataire ;
- départ ;
- arrivée ;
- service ;
- prix ;
- date ;
- statut.

Statuts possibles :

En attente
Payé
En cours
Terminé
Annulé

==================================================
26. ADMIN — ARGENT
==================================================

Créer une section :

« Argent »

Afficher toutes les transactions :

- date ;
- client ;
- prestataire ;
- montant total ;
- commission MSDMA ;
- montant prestataire ;
- statut.

Permettre de voir les paiements à confirmer.

Permettre de voir les montants à transférer manuellement.

==================================================
27. ADMIN — MODÉRATION
==================================================

Permettre de gérer :

- utilisateurs ;
- publications ;
- commentaires ;
- services ;
- signalements ;
- contenus sponsorisés.

Actions :

- masquer ;
- supprimer si nécessaire ;
- avertir ;
- suspendre ;
- réactiver.

==================================================
28. RECHERCHE
==================================================

Recherche globale :

- services ;
- prestataires ;
- publications ;
- catégories ;
- tâches publiques.

Filtres :

- catégorie ;
- prix ;
- zone ;
- note ;
- disponibilité.

==================================================
29. SÉCURITÉ
==================================================

Faire un audit complet.

Vérifier :

- authentification ;
- autorisation ;
- sessions ;
- cookies ;
- XSS ;
- injections ;
- SQL injection ;
- validation des entrées ;
- rate limiting ;
- uploads ;
- routes API ;
- secrets ;
- permissions ;
- ADMIN ;
- paiements ;
- données personnelles.

NE JAMAIS mettre :

- mot de passe ;
- clé secrète ;
- token privé ;
- clé API privée

dans le frontend ou GitHub.

Créer .env.example uniquement avec les noms des variables nécessaires.

==================================================
30. BASE DE DONNÉES
==================================================

Vérifier et adapter la base existante.

Prévoir les relations nécessaires pour :

users
profiles
roles
services
tasks
assignments
posts
post_media
likes
comments
shares
follows
saved_posts
conversations
messages
notifications
reviews
wallets
transactions
payments
advertising_campaigns
reports
admin_logs

IMPORTANT :

Ne crée pas de tables doublons si elles existent déjà.

Utilise les tables existantes et fais les migrations nécessaires.

==================================================
31. MOBILE
==================================================

L'application doit être parfaitement utilisable sur iPhone.

Vérifier :

- safe areas ;
- boutons ;
- clavier ;
- champs ;
- scrolling ;
- navigation ;
- tailles de texte ;
- pages non coupées ;
- fenêtres modales ;
- menus ;
- images ;
- vidéos.

Tester les écrans mobiles.

==================================================
32. NAVIGATION
==================================================

Navigation principale :

Accueil
Découvrir
Publier
Messages
Profil

Ajouter :

Notifications

Conserver les autres pages utiles déjà présentes.

==================================================
33. DESIGN
==================================================

Identité :

BLEU MARINE
BLANC
JAUNE

Design :

- moderne ;
- professionnel ;
- propre ;
- rapide ;
- mobile-first ;
- cartes arrondies ;
- boutons visibles ;
- animations légères ;
- loading ;
- erreurs ;
- états vides ;
- confirmations.

Ne pas copier exactement TikTok ou Facebook.

S'inspirer seulement de leurs bonnes pratiques d'utilisation.

==================================================
34. DONNÉES FICTIVES
==================================================

Ne pas présenter de fausses données comme de vraies données.

Les statistiques du dashboard doivent provenir de la base de données.

Les paiements doivent être réels dans le système de commandes.

Les likes/commentaires/abonnements doivent être réellement enregistrés.

==================================================
35. PERFORMANCE
==================================================

Utiliser :

- pagination ;
- chargement progressif ;
- compression images ;
- limites upload ;
- requêtes DB optimisées ;
- index ;
- cache lorsque nécessaire.

Ne jamais charger toutes les publications d'un coup.

==================================================
36. DÉPLOIEMENT
==================================================

Préparer le projet pour être réellement déployable.

Vérifier :

- package.json ;
- scripts ;
- build ;
- start ;
- variables d'environnement ;
- port ;
- CORS ;
- base de données ;
- migrations ;
- erreurs serveur ;
- logs.

Le serveur doit pouvoir démarrer correctement en production.

Si le projet utilise Node/Express, vérifier qu'il écoute sur :

0.0.0.0

et sur le port fourni par l'environnement.

Préparer le projet pour Render.

==================================================
37. INSTALLATION / APPLICATION
==================================================

L'application doit être une vraie application web mobile responsive.

Préparer également le projet pour pouvoir être installé comme PWA si l'architecture le permet :

- manifest ;
- icône ;
- nom MSDMA ;
- écran d'installation ;
- fonctionnement mobile ;
- HTTPS en production.

Ne prétends pas qu'une application native iOS/Android existe si elle n'a pas été réellement compilée.

==================================================
38. TESTS
==================================================

Tester obligatoirement :

1. inscription
2. connexion
3. déconnexion
4. profil
5. publication service
6. recherche
7. publication tâche
8. acceptation tâche
9. mission
10. messagerie
11. notifications
12. paiement manuel
13. bouton J'AI PAYÉ
14. confirmation admin
15. notification prestataire
16. travail terminé
17. calcul commission 10 %
18. montant prestataire 90 %
19. portefeuille
20. transaction
21. évaluation
22. like
23. commentaire
24. partage
25. abonnement
26. publicité
27. administration
28. blocage utilisateur
29. sécurité
30. déconnexion/reconnexion

Tester aussi :

- double paiement ;
- double acceptation ;
- montant invalide ;
- utilisateur non autorisé ;
- accès /admin sans autorisation ;
- fichier invalide ;
- erreur API ;
- erreur base de données.

==================================================
39. IMPORTANT — NE PAS FAIRE
==================================================

NE PAS :

- recommencer le projet ;
- supprimer le code existant ;
- créer une simple maquette ;
- inventer des paiements ;
- inventer des statistiques ;
- inventer des utilisateurs ;
- mettre de fausses clés API ;
- mettre des secrets dans GitHub ;
- utiliser CinetPay pour cette version MVP ;
- demander une clé CinetPay ;
- afficher un paiement comme réussi sans confirmation admin ;
- permettre au frontend de modifier la commission ;
- permettre à un utilisateur normal d'accéder à ADMIN.

==================================================
40. LIVRABLE FINAL
==================================================

À la fin du travail :

1. Corrige toutes les erreurs.
2. Vérifie le build.
3. Vérifie le démarrage.
4. Vérifie la base de données.
5. Vérifie toutes les routes.
6. Vérifie l'authentification.
7. Vérifie ADMIN.
8. Vérifie les paiements.
9. Vérifie la commission de 10 %.
10. Vérifie les notifications.
11. Vérifie le fil social.
12. Vérifie les profils.
13. Vérifie les messages.
14. Vérifie les évaluations.
15. Vérifie les publicités.
16. Vérifie la sécurité.
17. Vérifie l'affichage mobile.
18. Prépare le déploiement Render.

À la fin, donne un rapport clair :

- ce qui existait ;
- ce qui a été corrigé ;
- ce qui a été ajouté ;
- les fichiers modifiés ;
- les migrations créées ;
- les variables d'environnement nécessaires ;
- les erreurs restantes éventuelles ;
- la commande exacte pour démarrer le projet ;
- la commande exacte pour construire le projet ;
- les étapes pour le déployer sur Render.

IMPORTANT FINAL :

MSDMA doit rester le même projet.

Objectif :
UNE VRAIE APPLICATION MSDMA FONCTIONNELLE.

Pas une maquette.

Pas une démo.

Pas des faux boutons.

Pas des faux paiements.

Commission :
10 %

Devise :
GNF

Paiement MVP :
Orange Money / MTN / Wave manuel

Numéro de paiement MSDMA :
613 34 06 90

Bouton client :
« J'AI PAYÉ »

Confirmation admin :
« Confirmer réception paiement »

Fin de mission :
« Travail terminé »

Transfert :
90 % au prestataire après déduction des 10 % MSDMA.

L'application doit être prête à être testée puis déployée.

