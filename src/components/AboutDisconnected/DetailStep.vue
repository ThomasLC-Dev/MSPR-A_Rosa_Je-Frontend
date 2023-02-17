<template>
    <div class="global">
        <div class="img">
            <div class="textColor">{{ number }}</div>
        </div>
        <div class="text">
            {{ textStep }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        number: String,
        textStep: String
    },
    data() {
        return {
            numberImg: String
        }
    }
};
</script>

<style>
.global {
    padding: 5px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(242, 210, 126);
    border-radius: 100%;
    padding: 5px 12px;
    background-color: rgb(242, 210, 126);
    margin-left: auto;
    margin-right: auto;
    font-size: 1.8em;
}

.text {
    display: flex;
    padding: 8px;
    
}
.textColor{
    color: white;
}
</style>