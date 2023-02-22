<template>
    <div class="main-container">
        <div class="header">
            <div class="imgProfilContainer">
                <img :src="require(`@/assets/` + imgPath)" class="imgProfil" alt="">
            </div>

            <div class="nameProfil">
                <h1 id="lastname">{{ firstname }}</h1>
                <h1 id="firstname">{{ lastname }}</h1>
            </div>
        </div>
        <div class="contentProfil">
            <div class="Presentation">
                <div class="titlePresentation">
                    <h1>Qui suis-je ?</h1>
                </div>
                <div class="contentPresentation">
                    <div class="namePresentation">
                        <div class="textPresName">
                            <div class="litteTextPres">
                                <p>Nom :</p>
                            </div>
                            <div class="framedText">
                                <p id="lastname">{{ lastname }}</p>
                            </div>
                        </div>
                        <div class="textPresName">
                            <div class="litteTextPres">
                                <p>Prénom :</p>
                            </div>
                            <div class="framedText">
                                <p id="firstname">{{ firstname }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="photoPresentation">
                        <div class="litteTextPhoto">
                            <p>Modifier la photo :</p>
                        </div>
                        <button class="buttonPhoto"> Choisissez un fichier...</button>
                    </div>
                </div>
            </div>

            <div class="contact">
                <div class="titleContact">
                    <h1>Me contacter ?</h1>
                </div>
                <div class="address">
                    <div class="textaddress">
                        <p>Adresse :</p>
                    </div>
                    <div class="framedTextAddress">
                        <p id="roadNumber"> {{ roadNumber }}</p>
                    </div>
                    <div class="framedTextAddress">
                        <p id="roadType">{{ roadType }}</p>
                    </div>
                    <div class="framedTextAddress">
                        <p id="road"> {{ road }} </p>
                    </div>
                    <div class="framedTextAddress">
                        <p id="addtionalAddress">{{ addtionalAddress }}</p>
                    </div>
                    <div class="framedTextAddress">
                        <p id="postalCode"> {{ postalCode }}</p>
                    </div>
                    <div class="framedTextAddress">
                        <p id="city">{{ city }}</p>
                    </div>
                </div>

                <div class="internetContact">
                    <div class="email">
                        <div class="textemail">
                            <p>E-mail : </p>
                        </div>
                        <div class="framedTextAddress">
                            <p id="email">{{ email }}</p>
                        </div>
                    </div>

                    <div class="numeroTel">
                        <div class="textNum">
                            <p>Numéro : </p>
                        </div>
                        <div class="framedTextAddress">
                            <p id="phone">{{ phone }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modifButton">
                <button><img src="../../assets/Logo/LogoModif.png" alt="Modifier" class="modifButtonImg"></button>
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
    width: 100vh;
    height: 65vh;
    border: 2px solid var(--main-text);
    border-radius: 10px;
    margin-top: 20px;
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
    justify-content: center;
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
    justify-content: space-between;
    align-items: center;
}

.framedText {
    margin: auto;
    padding: 8px;
    border: 2px solid var(--main-text);
    border-radius: 10%;
    background-color: white;
    margin-left: 5%;

}

.framedTextAddress {
    padding: 8px;
    border: 2px solid var(--main-text);
    border-radius: 10%;
    background-color: white;
    margin-left: 2%;
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
    display: flex;
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
    flex-wrap: nowrap;
    color: var(--main-text);
}

.textaddress {
    flex-wrap: nowrap;
    color: var(--main-text);
}

.internetContact {
    display: flex;
    flex-direction: column;
    margin: 2%;
    gap: 10px;

}

.email {
    display: flex;
    flex-direction: row;
    color: var(--main-text);
    align-items: center;
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

    .contentProfil {
        width: 40vh;
        height: 110vh;
    }

    .contentPresentation {
        flex-direction: column;
        width: 20vh;
        gap: 10px;
    }


    .textPresName {
        display: flex;
        flex-direction: row;
        margin: 5%;
        margin-top: 0%;

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

    .internetContact {
        display: flex;
        flex-direction: column;
        margin: 2%;
        gap: 10px;

    }

    .email {
        display: flex;
        flex-direction: row;
        color: var(--main-text);
        align-items: center;
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
}
</style>