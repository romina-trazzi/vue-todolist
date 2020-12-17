/* 

Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il tasto Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

*/

let root = new Vue ({
    el: "#root",
    data: {
        nuovoTask: "",
        listaTask: ["Studiare JS", "Vedere Vue"],
        immagine: "https://www.boolean.careers/images/misc/logo.png"
    },

    methods: {
        addElement() {
            if (this.nuovoTask.length >= 4) {
                this.listaTask.push(this.nuovoTask)
                this.nuovoTask = ""
            }
        },

        deleteElement(index) {
            if (this.listaTask.length == 0) {
                alert("Nulla da fare")
            } else {
                this.listaTask.splice(index, 1)
            }
        }
    } 


}); 