<template>
    <div class="contentSpeechLeft">
        <div class="imgPeopleLeft">
            <img src="@/assets/PeopleTalking/people-talking-illustration-vector-Left.png" alt="Une personne qui parle"
                class="imgLeftPeople">
        </div>
        <div class="speechLeft">
            <img src="@/assets/PeopleTalking/Speech-Bubble-Left.png" alt="" class="speechBubbleLeft">
            <div class="textSpeechLeft">
                {{text}}
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

.imgLeftPeople {
    width: 100px;
}

.speechBubbleLeft {
    width: 100%;
    display: flex;

}

.textSpeechLeft {
    display: flex;;
    justify-content: space-around;
    margin-top: -50px;
}
</style>