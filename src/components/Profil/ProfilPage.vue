<template>
    <div class="main-container">

        <div class="header">
            <div class="imgProfilContainer">
                <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
            </div>

            <div class="nameProfil" label="Name Profil">
                <h1 id="lastname">{{ user.firstName }}</h1>
                <h1 id="firstname">{{ user.lastName }}</h1>
            </div>
        </div>
        <div class="contentProfil" label="Content Profil">
            <div class="Presentation" label="Presentation">
                <div class="titlePresentation" label="Title Presentation">
                    <h1>Qui suis-je ?</h1>
                </div>
                <div class="contentPresentation" label="Content Presentation">
                    <div class="namePresentation" label=" Name Presentation">
                        <div class="textPresName" label="Name Text Presentation">
                            <div class="litteTextPres" label="Libelle">
                                <p>Nom :</p>
                            </div>
                            <div class="InputPresentation" label=" Input Presentation">
                                <input type="text" :disabled="modificationAllowed == 1" v-model="user.lastName" />
                            </div>
                        </div>
                        <div class="textPresName" label="FirstName Text Presentation">
                            <div class="litteTextPres" label="Libelle">
                                <p>Prénom :</p>
                            </div>
                            <div class="InputPresentation" label=" Input Presentation">
                                <input type="text" :disabled="modificationAllowed == 1" v-model="user.firstName" />
                            </div>
                        </div>
                    </div>
                    <div class="photoPresentation" label="Photo presentation">
                        <div class="litteTextPhoto" label="Libelle photo">
                            <p>Modifier la photo :</p>
                        </div>
                        <!-- <button class="buttonPhoto" label="Button Photo"  @click="onPickFile"> Choisissez un fichier...</button> -->
                        <input class="buttonPhoto" type="file" ref="fileInput" accept="image/*" @change="onFilePicked"
                            :disabled="modificationAllowed == 1" />
                    </div>
                </div>
            </div>

            <div class="contact" label="Contact">
                <div class="titleContact" label="Title contact">
                    <h1>Me contacter ?</h1>
                </div>
                <div class="address" label="Address">
                    <div class="textaddress" label="Text Address">
                        <p>Adresse :</p>
                    </div>
                    <div class="InputAddress" label="Input Address">
                        <input type="number" :disabled="modificationAllowed == 1" v-model="user.address.roadNumber" />
                    </div>
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :disabled="modificationAllowed == 1" v-model="user.address.roadType" />

                    </div>
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :disabled="modificationAllowed == 1" v-model="user.address.road" />
                    </div>
                </div>

                <div class="secondPartAddress">
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :disabled="modificationAllowed == 1" v-model="user.address.addtionalAddress" />
                    </div>
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :disabled="modificationAllowed == 1" v-model="user.address.postalCode" />
                    </div>
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :disabled="modificationAllowed == 1" v-model="user.address.city" />

                    </div>
                </div>

                <div class="internetContact" label="Internet Contact">
                    <div class="email" label="email">
                        <div class="textemail" label="Text E-mail">
                            <p>E-mail : </p>
                        </div>
                        <div class="InputAddress" label="Input Address">
                            <input type="text" :disabled="modificationAllowed == 1" v-model="user.email" />
                        </div>
                    </div>

                    <div class="numeroTel" label="Numero Tel">
                        <div class="textNum" label="Text Number">
                            <p>Numéro : </p>
                        </div>
                        <div class="InputAddress" label="Input Address">
                            <input type="text" :disabled="modificationAllowed == 1" v-model="user.phone" />
                        </div>
                    </div>
                </div>
                <div class="modifButton" label="Modification Button">
                    <input class="btn-validate" type="submit" value="Modifier" @click="ModificationAllowed"
                        v-show="modificationAllowed == 1">
                    <input class="btn-validate" type="submit" value="Terminer" @click="ModificationFinish"
                        v-show="modificationAllowed == 0">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { getToken } from '../../../api.config'
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
        ModificationAllowed() {
            this.modificationAllowed = 0

        },
        ModificationFinish() {
            this.modificationAllowed = 1
        },
        GetUser() {
            fetch("https://a-rosa-je.herokuapp.com/api/users/" + this.id, {
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

<style>
.header {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    width: 100vh;
    align-items: center;
    padding-bottom: 2%;
}

.main-container {
    margin-left: 5%;
    border: none;
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
    width: 150vh;
    height: 105vh;
    border: 2px solid var(--main-text);
    border-radius: 10px;
    margin-top: 0px;
    margin-bottom: 20px;
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

.textPresName {
    display: flex;
    flex-direction: row;
    margin: 5%;
    justify-content: space-around;
    align-items: center;
}

.litteTextPres {
    margin-right: 5%;
}

input {
    padding: 5%;
    width: fit-content;
}

.photoPresentation {
    display: flex;
    flex-direction: row;
    margin: 5%;
    margin-right: 5%;
    color: var(--main-text);
}

.litteTextPhoto {
    margin-left: 5%;
}

.buttonPhoto {
    margin-left: 5%;
    border: none;
    padding: 0%;
}

.contact {
    margin-top: 5%;
    flex-direction: column;
    flex-wrap: nowrap;
}

.titleContact {
    text-decoration: underline;
    text-decoration-color: var(--main-text);
    text-decoration-thickness: 3px;
}

.address {
    padding-left: 12px;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--main-text);
    justify-content: space-around;
    align-content: stretch;
}

.secondPartAddress {
    padding-left: 15px;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--main-text);
    justify-content: space-around;
    margin-left: 15%;

}

.textaddress {
    flex-wrap: nowrap;
    color: var(--main-text);
    margin-right: 2%;

}

.internetContact {
    display: flex;
    flex-direction: column;
    margin: 2%;
    gap: 10px;
    justify-content: flex-start;

}

.email {
    display: flex;
    flex-direction: row;
    color: var(--main-text);
    align-items: center;
}

.textemail {
    margin-right: 14%;
}

.textNum {
    margin-right: 13%;
}

.numeroTel {
    display: flex;
    flex-direction: row;
    color: var(--main-text);
    align-items: center;
}

.modifButton {
    width: 50px;
    margin: auto;
    padding: auto;
    margin-left: 40%;
}



button {
    border: none;
}

@media(max-width: 1000px) {
    .header {
        width: 40vh;
    }

    input {
        display: block;
        padding: 5%;
        width: 90%;
        flex-wrap: wrap;
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

    .secondPartAddress {
        flex-direction: column;
        margin-left: 0%;
    }

    .framedText {
        padding: 0px;
        margin-left: 5%;
    }

    .framedTextAddress {
        margin-top: 5%;
    }

    .photoPresentation {
        flex-direction: column;
        margin-top: 5%;

    }

    .address {
        flex-direction: column;
    }

    .email {
        flex-direction: column;
    }

    .numeroTel {
        flex-direction: column;
    }

    .modifButton {
        width: 50px;
        margin: auto;
        padding: auto;
        margin-left: 10%;
    }


}
</style>