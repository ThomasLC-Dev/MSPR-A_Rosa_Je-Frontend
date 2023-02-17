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
                        <input type="text" id="phone" v-model="phone">
                    </div>
                    <div class="form-field">
                        <label for="email">Email:</label>
                        <input type="text" id="email" v-model="email">
                    </div>
                </div>

                <div class="form-field-direction-gp">
                    <div class="address-road">
                        <div class="form-field">
                            <label for="roadNumber">Nº de rue:</label>
                            <input type="text" id="roadNumber" v-model="roadNumber">
                        </div>
                        <div class="form-field">
                            <label for="roadType">Type de rue:</label>
                            <input type="text" id="roadType" v-model="roadType">
                        </div>
                    </div>
                    <div class="form-field">
                        <label for="road">Nom de rue :</label>
                        <input type="text" id="road" v-model="road">
                    </div>
                </div>
                <div class="form-field-direction-gp">
                    <div class="form-field">
                        <label for="addtionalAddress">Adresse complémentaire :</label>
                        <input type="text" id="addtionalAddress" v-model="addtionalAddress">
                    </div>
                    <div class="address-zip">
                        <div class="form-field">
                            <label for="postalCode">Code postal :</label>
                            <input type="text" id="postalCode" v-model="postalCode">
                        </div>
                        <div class="form-field">
                            <label for="city">Nom de ville :</label>
                            <input type="text" id="city" v-model="city">
                        </div>
                    </div>
                </div>
                <div class="form-field-direction">
                    <div class="form-field">
                        <label for="password">Mot de passe :</label>
                        <input type="password" id="password" v-model="password">
                    </div>
                    <div class="form-field">
                        <label for="passwordConfirmation">Confirmation :</label>
                        <input type="password" id="passwordConfirmation" v-model="passwordConfirmation">
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
                <input class="btn-reset" type="reset" value="Annuler">
                <input class="btn-validate" type="submit" value="S'inscrire">
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
.form-register {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
}

.form-fields {
    display: flex;
    flex-direction: column;
    
}

.form-field-direction {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    /* flex-direction: column; pour la version mobile */
}

.form-field-direction-gp{
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
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
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
}
</style>