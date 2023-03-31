<template>
    <div id="containerSpeechLeft" class="contentSpeechLeft">
        <div class="imgPeopleLeft">
            <img src="@/assets/PeopleTalking/people-talking-illustration-vector-Left.png" alt="Une personne qui parle"
                class="imgLeftPeople">
        </div>
        <div class="speechLeft">
            <img :src="require(`@/assets/` + speechLink)" alt="" class="speechBubbleLeft">
            <div class="textSpeechLeft">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftPeople",
    data: () => ({}),
    props: {
        text: String,
        speechLink: String
    }
}
</script>

<style>
.contentSpeechLeft {
    margin: 5%;
    margin-top: -5%;
    display: flex;
    flex-direction: row;
}

.speechLeft {
    position: relative;
}

.imgLeftPeople {
    width: 100px;
}

.speechBubbleLeft {
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;


}

.textSpeechLeft {
    display: flex;
    justify-content: space-around;
    z-index: 9;
    margin: 15px;
    margin-left: 15%;
    font-size: small;
}

@media (max-width : 1000px) {


    .imgLeftPeople {
        width: 100px
    }

    .speechBubbleLeft {
        display: none;

    }

    .textSpeechLeft {
        display: flex;
        justify-content: space-around;
        z-index: 9;
        margin: 15px;
        margin-left: 15%;
        font-size: small;
        border: 2px solid green;
        padding: 10%;

    }

}
</style>