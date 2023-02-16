<template>
    <div class="fullPage">
        <div class="explanationContent">
            <img src="@/assets/Plante/Plante_8.webp" alt="" class="imgPlantExplanation">

            <h1>A’Rosa-je, c’est quoi ?</h1>
            <p><br>L’entreprise “A’rosa-je” aide les particuliers à prendre soin de leurs plantes.
                Fondée en 1984 elle a tout d’abord été composée d’une petite équipe de botanistes dans une
                seule
                ville et est maintenant composée de plus de 1500 botanistes répartis sur toute la France qui
                rendent service aux propriétaires de plantes de deux façons :

                <br>• En allant garder leurs plantes lorsque les propriétaires sont absents
                <br>• En prodiguant des conseils d’entretien afin que les propriétaires s’occupent de mieux en
                mieux
                de leurs plantes.

            </p>
        </div>


        <!-- <img src="@/assets/Plante/Plante_9.jpg" alt="" class="imgPlantExplanation_2"> -->

        <div class="steps">
            <ul class="stepList">
                <textImg :number="1" :textStep="textStep1"> </textImg>
                <textImg :number="2" :textStep="textStep2"> </textImg>
                <textImg :number="3" :textStep="textStep3"> </textImg>
                <textImg :number="4" :textStep="textStep4"> </textImg>
                <textImg :number="5" :textStep="textStep5"> </textImg>

            </ul>
            <img src="@/assets/Plante/Plante_3.jpeg" alt="" class="imgPlantExplanation_2">
        </div>
    </div>
</template>
<script>
import textImg from "../components/TextImgDisconnectedView/disconnectedViewTextImg.vue"
export default {
    name: 'AboutView',
    components: {
        textImg,
    },
    data() {
        return {
            textStep1: "Inscrivez-vous !",
            textStep2: "Renseignez vos informations !",
            textStep3: "Enregistrez votre plante. (N’oubliez pas de décrire ses besoins où problèmes !)",
            textStep4: "Renseignez vos créneaux de disponibilité !",
            textStep5: "Plus qu’à attendre !(Un gardien se portera volontaire selon vos créneaux)",
        }
    }
}

</script>
<style>
.fullPage {
    align-self: center;
    background-color: var(--menu-button-pipe);
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    height: fit-content;
    display: flex;
    flex-direction: column;
}

.explanationContent {
    display: block;
}
.imgPlantExplanation {
    display: block;
    width: 200px;
    height: 200px;
    padding: 10px;
    margin: 10px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    float: left;

    margin: 0 0 0 15px;

}

.imgPlantExplanation_2 {
    width: 400px;
    align-self: center;
    margin: 10%;
    margin-top: 5%;
}

.stepList {
    padding-top: 10px;
    border-radius: 50px;
    border: 2px solid green;
    width: 400;
    height: 320px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--main-bg-color);
    flex-direction: column;
    align-items: flex-start;
}

.steps{
    display: flex;
    flex-direction: row;
}

@media (max-width : 1300px) {
    .imgPlantExplanation {
        float: none;
    }
    .steps{
        flex-direction: column;
    }

    
}

</style>