<template>
    <div class="main-container">
        <h1>
            INSCRIPTION
        </h1>
        <form class="form-register" @submit.prevent="onSubmit">
            <div class="form-fields">

                <div class="form-field-direction">
                    <div class="form-field">
                        <label for="lastname">Nom:</label>
                        <input id="lastname" v-model="lastname">
                    </div>
                    <div class="form-field">
                        <label for="firstname">Prénom:</label>
                        <input id="firstname" v-model="firstname">
                    </div>
                </div>

                <div class="form-field-direction">
                    <div class="form-field">
                        <label for="phone">Nº de mobile:</label>
                        <input id="phone" v-model="phone">
                    </div>
                    <div class="form-field">
                        <label for="email">Email:</label>
                        <input id="email" v-model="email">
                    </div>
                </div>

                <div class="form-field-direction">
                    <div class="address-road">
                        <div class="form-field">
                            <label for="roadNumber">Nº de rue:</label>
                            <input id="roadNumber" v-model="roadNumber">
                        </div>
                        <div class="form-field">
                            <label for="roadType">Type de rue:</label>
                            <input id="roadType" v-model="roadType">
                        </div>
                    </div>
                    <div class="form-field">
                        <label for="road">Nom de rue :</label>
                        <input id="road" v-model="road">
                    </div>
                </div>
                <div class="form-field-direction">
                    <div class="form-field">
                        <label for="addtionalAddress">Adresse complémentaire :</label>
                        <input id="addtionalAddress" v-model="addtionalAddress">
                    </div>
                    <div class="address-zip">
                        <div class="form-field">
                            <label for="postalCode">Nº de rue:</label>
                            <input id="postalCode" v-model="postalCode">
                        </div>
                        <div class="form-field">
                            <label for="city">Type de rue:</label>
                            <input id="city" v-model="city">
                        </div>
                    </div>
                </div>
                <div class="form-field-direction">
                    <div class="form-field">
                        <label for="password">Mot de passe :</label>
                        <input id="password" v-model="password">
                    </div>
                    <div class="form-field">
                        <label for="passwordConfirmation">Confirmation :</label>
                        <input id="passwordConfirmation" v-model="passwordConfirmation">
                    </div>
                </div>
            </div>
            <div class="group-checkbox">
                <div class="form-checkbox">
                    <input type="checkbox" id="customer" value="1" v-model="userRoles">
                    <label for="customer" class="register-checkbox">Avez-vous besoin de faire garder vos plantes ?</label>
                </div>

                <div class="form-checkbox">
                    <input type="checkbox" id="keeper" value="2" v-model="userRoles">
                    <label for="keeper" class="register-checkbox">Voulez-vous être gardien de plantes ?</label>
                </div>

                <div class="form-checkbox">
                    <input type="checkbox" id="botanist" value="3" v-model="userRoles">
                    <label for="botanist" class="register-checkbox">Souhaitez-vous apporter des conseils spécialisés ?</label>
                </div>
            </div>

            <div class="button-group">
                <input class="button" type="reset" value="Annuler">
                <input class="button" type="submit" value="S'inscrire">
            </div> 
        </form>
    </div>
</template>

<script>
export default {
    name:'RegisterPage',
    data() {
        return {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            roadNumber: '',
            roadType: '',
            addtionalAddress: '',
            road: '',
            postalCode: '',
            city: '',
            password: '',
            passwordConfirmation: '',
            userRoles: []
        }
    },
    // methods: {
    //     onSubmit() {
    //         let userRegister = {
    //             firstname: this.firstname,
    //             lastname: this.lastname,
    //             phone: this.phone,
    //             email: this.email,
    //             roadNumber: this.roadNumber,
    //             roadType: this.roadType,
    //             addtionalAddress: this.addtionalAddress,
    //             road: this.road,
    //             postalCode: this.postalCode,
    //             city: this.city,
    //             password: this.password,
    //             passwordConfirmation: this.passwordConfirmation,
    //             userRoles: this.userRoles
    //         }
    //         this.$emit('register-submitted', userRegister)

    //         this.firstname,
    //             this.lastname  = ''
    //             this.phone = ''
    //             this.email = ''
    //             this.roadNumber = ''
    //             this.roadType = ''
    //             this.addtionalAddress = ''
    //             this.road = ''
    //             this.postalCode = ''
    //             this.city = ''
    //             this.password = ''
    //             this.passwordConfirmation = ''
    //             this.userRoles = ''
    //     }
    }
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    background-color: var(--main-bg-color);
    border: 2px solid #519069;
    /* var(--main-container-border) */
}

h1 {
    color: var(--main-title-h1);
    text-align: center;
    margin-bottom: 10px;
}

.form-register {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.form-fields {
    display: flex;
    flex-direction: column;
}

.form-field-direction {
    display: flex;
    flex-direction: row;
    /* flex-direction: column; pour la version mobile */
}

.form-field {
    display: flex;
    flex-direction: column;
}

.form-checkbox {
    display: flex;
    flex-direction: row;
}

.register-checkbox {
    margin-left: 5px;
}

.address-road, .address-zip {
    display: flex;
    flex-direction: column;
}

.button-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>