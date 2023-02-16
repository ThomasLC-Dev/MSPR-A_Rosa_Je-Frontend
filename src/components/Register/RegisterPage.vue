<template>
        <div class="container-register">
            <h2 class="container-title">
                INSCRIPTION
            </h2>
            <div class="form-register">
                <div class="left-register">
                    <div class="form-field">
                        <label for=""></label>
                        <input type="text">
                    </div>
                </div>
                <div class="right-register">

                </div>
            </div>
        </div>
    
</template>

<script>
export default {
    name:'RegisterPage',
}

</script>

<style scoped>
.container-register {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}

.container-title {
    color: var(--main-title-h2);
}

.form-register {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left-register, .right-register {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    margin: 2px;
}

</style>

