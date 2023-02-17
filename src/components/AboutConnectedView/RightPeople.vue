<template>
    <div class="contentSpeechRight">
     
        <div class="speechRight">
            <img src="@/assets/PeopleTalking/Speech-Bubble-Right.png" alt="" class="speechBubbleRight">
            <div class="textSpeechRight">
                {{text}}
            </div>
        </div>
        <div class="imgPeopleRight">
            <img src="@/assets/PeopleTalking/people-talking-illustration-vector-Right.png" alt="Une personne qui parle"
                class="imgRightPeople">
        </div>
    </div>

</template>

<script>
export default {
    name: "RightPeople",
    data: () => ({}),
    props: {
        text: String,
    }
}
</script>

<style>
.contentSpeechRight {
    margin: 5%;
    margin-top: -5%;
    display: flex;
    flex-direction: row;
}

.imgRightPeople {
    width: 150px;
}

.speechBubbleRight {
    width: 100%;
    display: flex;

}

.textSpeechRight {
    display: flex;;
    justify-content: space-around;
    margin-top: -50px;
}
</style>