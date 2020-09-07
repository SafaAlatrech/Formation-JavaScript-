let restaurant = {
    name: 'Papillon',
    capaciteDacceuil: 75,
    nombreDinvites: 0,
    disponibilites: function (tailleFete) {
        let siegeRestant = this.capaciteDacceuil - this.nombreDinvites
         return  tailleFete <= siegeRestant
    },

     siegeFete: function (tailleFete) {
         this.nombreDinvites = this.nombreDinvites + tailleFete
     },
     supprimerFete: function (tailleFete) {
         this.nombreDinvites = this.nombreDinvites - tailleFete

     }
}
 restaurant.siegeFete(72)
 console.log(restaurant.disponibilites(4))
 restaurant.supprimerFete(5)
 console.log(restaurant.disponibilites(4))

 