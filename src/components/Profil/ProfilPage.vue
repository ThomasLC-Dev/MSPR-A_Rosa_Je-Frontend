<template>
    <div class="main-container">
        <div class="header">
            <div class="imgProfilContainer">
                <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
            </div>

            <div class="nameProfil" label="Name Profil">
                <h2 id="lastname">{{ user.firstName }}</h2>
                <h2 id="firstname">{{ user.lastName }}</h2>
            </div>
        </div>
        <div class="contentProfil" label="Content Profil">
            <div class="Presentation" label="Presentation">
                <div class="titlePresentation" label="Title Presentation">
                    <h2>Qui suis-je ?</h2>
                </div>
                <div class="contentPresentation" label="Content Presentation">
                    <div class="namePresentation" label=" Name Presentation">

                        <div class="form-field-direction">
                            <div class="form-field">
                                <label for="lastname">Nom :</label>
                                <input id="lastname" :disabled="modificationAllowed == 1" v-model="user.lastName" />
                            </div>
                            <div class="form-field">
                                <label for="firstname">Prénom :</label>
                                <input id="firstname" :disabled="modificationAllowed == 1" v-model="user.firstName" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact" label="Contact">
                <div class="titleContact" label="Title contact">
                    <h2>Me contacter ?</h2>
                </div>
                <div class="profil-info">
                    <div class="form-field-direction">
                        <div class="form-field">
                            <label for="roadNumber">Nº de rue :</label>
                            <input type="text" id="roadNumber" :disabled="modificationAllowed == 1"
                                v-model="user.address.roadNumber" />
                        </div>
                        <div class="form-field field-2">
                            <label for="roadType">Type de voie :</label>
                            <input type="text" id="roadType" :disabled="modificationAllowed == 1"
                                v-model="user.address.roadType" />
                        </div>
                        <div class="form-field field-6">
                            <label for="road">Nom de rue :</label>
                            <input type="text" id="road" :disabled="modificationAllowed == 1" v-model="user.address.road" />
                        </div>
                    </div>

                    <div class="form-field-direction">
                        <div class="form-field">
                            <label for="addtionalAddress">Adresse complémentaire :</label>
                            <input type="text" id="addtionalAddress" :disabled="modificationAllowed == 1"
                                v-model="user.address.addtionalAddress" />
                        </div>
                        <div class="form-field field-2">
                            <label for="postalCode">Code postal :</label>
                            <input type="text" id="postalCode" :disabled="modificationAllowed == 1"
                                v-model="user.address.postalCode" />
                        </div>
                        <div class="form-field field-7">
                            <label for="city">Nom de ville :</label>
                            <input type="text" id="city" :disabled="modificationAllowed == 1" v-model="user.address.city" />
                        </div>
                    </div>

                    <div class="form-field-direction">
                        <div class="form-field field-7">
                            <label for="email">Email :</label>
                            <input type="text" id="email" :disabled="modificationAllowed == 1" v-model="user.email" />
                        </div>
                        <div class="form-field field-3">
                            <label for="phone">Nº de mobile :</label>
                            <input type="text" id="phone" :disabled="modificationAllowed == 1" v-model="user.phone" />
                        </div>
                    </div>
                </div>
                <div class="button-group">
                    <input class="btn-reset" type="reset" value="Annuler" @click="ModificationReset"
                        v-show="modificationAllowed == 0" />
                    <input class="btn-validate" type="submit" value="Modifier" @click="ModificationAllowed"
                        v-show="modificationAllowed == 1" />
                    <input class="btn-validate" type="submit" value="Enregistrer" @click="ModificationFinish"
                        v-show="modificationAllowed == 0" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { config, getToken, getCurrentUserId } from '../../../api.config'

export default {
    name: "ProfilPage",
    data() {
        return {
            imgPath: "PeopleTalking/profile.jpg",

            user: {
                "address": {
                    "additionalAddress": "string",
                    "city": "string",
                    "id": 0,
                    "latitude": 0,
                    "longitude": 0,
                    "postalCode": "string",
                    "road": "string",
                    "roadNumber": 0,
                    "roadType": "string"
                },
                "email": "string",
                "firstName": "string",
                "id": 0,
                "imageUrl": "string",
                "lastName": "string",
                "phone": "string",
                "status": true,
                "userRoles": [
                    {
                        "id": 0,
                        "role": {
                            "id": 0,
                            "name": "string"
                        }
                    }
                ]
            },

            modificationAllowed: 1,
            id: 6,
            info: null
        }
    },
    methods: {

        //Ouvrir explorateur de fichier pour choisir une image
        onPickFile() {
            this.$refs.fileInput.click()
        },
        onFilePicked(event) {
            const files = event.target.files
            let filename = files[0].name
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        },
        //Fin
        ModificationAllowed() {
            this.modificationAllowed = 0

        },
        ModificationReset() {
            this.modificationAllowed = 1
        },

        ModificationFinish() {
            this.modificationAllowed = 1
            let userData = {
                "email": this.user.email,
                "phone": this.user.phone,
                "firstName": this.user.firstName,
                "lastName": this.user.lastName
            }
            let addressData = {
                "additionalAddress": this.user.address.additionalAddress,
                "city": this.user.address.city,
                "postalCode": this.user.address.postalCode,
                "road": this.user.address.road,
                "roadNumber": this.user.address.roadNumber,
                "roadType": this.user.address.roadType
            }

            fetch(config.apiBase + config.endpoints.usersPath + '/' + getCurrentUserId(), {
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })

            fetch(config.apiBase + config.endpoints.addressesPath + '/' + this.user.address.id, {
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addressData)
            })
        },
        GetUser() {
            fetch("https://a-rosa-je.herokuapp.com/api/users/" + getCurrentUserId(), {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                }
            })
                .then((res) => res.json())
                .then((data) => (this.user = data))
        }
    },
    beforeMount() {
        this.GetUser();
    }
};

</script>

<style scoped>
.main-container {
    border: none;
}

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 2%;
}

.imgProfilContainer {
    width: 150px;
}

.imgProfil {
    width: 100%;
    border-radius: 50%;
}

.nameProfil {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    gap: 10px;
    border-bottom: 5px solid var(--main-text);
}

.contentProfil {
    border: 2px solid var(--main-text);
    border-radius: 10px;
    margin: 0px;
    padding: 40px;
    background-color: var(--menu-button-diselected-background);
}

.contentPresentation {
    display: flex;
    padding: auto;
    width: 100vh;
    white-space: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    align-content: center;
    flex-wrap: nowrap;
    margin-left: 180px;
}

.titlePresentation {
    padding: 5px;
    text-decoration: underline;
    text-decoration-color: var(--main-text);
    text-decoration-thickness: 4px;
}

.namePresentation {
    display: flex;
    flex-direction: column;
    color: var(--main-text);

}

.form-field-direction {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
}

.profil-info {
    display: flex;
    flex-direction: column;
    margin: 5px;
}

.contact {
    margin-top: 2%;
    flex-direction: column;
    flex-wrap: nowrap;
}

.titleContact {
    text-decoration: underline;
    text-decoration-color: var(--main-text);
    text-decoration-thickness: 3px;
}

.field-2 {
    flex: 2;
}

.field-3 {
    flex: 3;
}

.field-6 {
    flex: 6;
}

.field-7 {
    flex: 7;
}

@media(max-width: 1000px) {
    .header {
        width: 40vh;
    }

    .contentProfil {
        width: 40vh;
        height: 140vh;
    }

    .contentPresentation {
        flex-direction: column;
        width: 100%;
        gap: 10px;
        margin-left: 0%;
    }
}
</style>