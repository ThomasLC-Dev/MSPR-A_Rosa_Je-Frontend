<template>
    <div class="main-container">
        <div class="header">
            <div class="imgProfilContainer">
                <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
            </div>

            <div class="nameProfil" label="Name Profil">
                <h1 id="lastname">{{ firstname }}</h1>
                <h1 id="firstname">{{ lastname }}</h1>
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
                                <input type="text" :value="lastname" />
                            </div>
                        </div>
                        <div class="textPresName" label="FirstName Text Presentation">
                            <div class="litteTextPres" label="Libelle">
                                <p>Prénom :</p>
                            </div>
                            <div class="InputPresentation" label=" Input Presentation">
                                <input type="text" :value="firstname" />
                            </div>
                        </div>
                    </div>
                    <div class="photoPresentation" label="Photo presentation">
                        <div class="litteTextPhoto" label="Libelle photo">
                            <p>Modifier la photo :</p>
                        </div>
                        <button class="buttonPhoto" label="Button Photo"> Choisissez un fichier...</button>
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
                        <input type="number" :value="roadNumber" />
                    </div>
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :value="roadType" />

                    </div>
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :value="road" />
                    </div>
                </div>

                <div class="secondPartAddress">
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :value="addtionalAddress" />
                    </div>
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :value="postalCode" />
                    </div>
                    <div class="InputAddress" label="Input Address">
                        <input type="text" :value="city" />

                    </div>
                </div>

                <div class="internetContact" label="Internet Contact">
                    <div class="email" label="email">
                        <div class="textemail" label="Text E-mail">
                            <p>E-mail : </p>
                        </div>
                        <div class="InputAddress" label="Input Address">
                            <input type="text" :value="email" />
                        </div>
                    </div>

                    <div class="numeroTel" label="Numero Tel">
                        <div class="textNum" label="Text Number">
                            <p>Numéro : </p>
                        </div>
                        <div class="InputAddress" label="Input Address">
                            <input type="text" :value="phone" />
                        </div>
                    </div>
                </div>
                <div class="modifButton" label="Modification Button">
                    <button><img src="../../assets/Logo/LogoModif.png" alt="Modifier" class="modifButtonImg"
                            label="Button Modification"></button>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProfilPage",
    data() {
        return {
            imgPath: "PeopleTalking/profile.jpg",
            firstname: 'Jane',
            lastname: 'Doe',
            phone: '06.19.79.56.48',
            email: 'JaneDoe@epsi.fr',
            roadNumber: '10',
            roadType: 'Rue',
            addtionalAddress: 'Pas de complément d\'adresse',
            road: 'Fernand Robert',
            postalCode: '35000',
            city: 'Rennes',
        }
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
    width: 60vh;

}

.contentProfil {
    width: 150vh;
    height: 90vh;
    border: 2px solid var(--main-text);
    border-radius: 10px;
    margin-top: 0px;
    margin-bottom: 20px;
    background-color: var(--menu-button-diselected-background);
}

.contentPresentation {
    display: flex;
    margin: auto;
    padding: auto;
    width: 100vh;
    white-space: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    padding: auto;
    align-content: center;
    flex-wrap: nowrap;

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
    padding-left: 15px;
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
    float: right;
    margin-right: 5%;
    margin-bottom: 0%;
}

.modifButtonImg {
    width: 100%;
    margin: 0%;
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
        height: 120vh;
    }

    .contentPresentation {
        flex-direction: column;
        width: 20vh;
        gap: 10px;
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
        width: 25px;
        float: right;
        margin-right: 5%;
        margin-bottom: 0%;
    }

    .modifButtonImg {
        width: 100%;
        margin: 0%;
    }
}
</style>