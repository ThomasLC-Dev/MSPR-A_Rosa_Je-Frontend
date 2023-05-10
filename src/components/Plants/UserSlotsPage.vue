<template>
	<div class="main-container">
		<h1>Mes créneaux</h1>
		<table class="slots">
			<tr>
				<th>Date de début</th>
				<th>Date de fin</th>
				<th>Gardien</th>
				<th>Supprimer</th>
			</tr>
			<tr v-for="slot in slots" :key="slot.id">
				<td>{{ slot.startDate }}</td>
				<td>{{ slot.endDate }}</td>
				<td>{{ (slot.keeper == null) ? "" : slot.keeper.lastName + " " + slot.keeper.firstName }}</td>
				<td><button class="delete-btn" @click="deleteSlot(slot.id)">Supprimer</button></td>
			</tr>
		</table>
		<div class="ButtonReturn">
			<input class="btn-validate" type="submit" value="Retour" @click="ReturnToPlantsPage">
		</div>
	</div>
</template>

<script>
import { config, getToken, getCurrentUserId } from '../../../api.config'
export default {
	name: "UserSlotsPage",
	data() {
		return {
			slots: [],
			routeUserPlants: "plants"
		}
	},
	created() {
		this.loadData()
	},
	methods: {
		goToView(path) {
			this.$router.push({ name: path });
		},
		loadData() {
			fetch(config.apiBase + config.endpoints.slotsPath + '?user=' + getCurrentUserId(), {
				method: "GET",
				headers: { Authorization: 'Bearer ' + getToken() }
			})
				.then(res => res.json())
				.then(data => this.slots = data)
		},
		deleteSlot(slotId) {
			fetch(config.apiBase + config.endpoints.slotsPath + '/' + slotId, {
				method: "DELETE",
				headers: { Authorization: 'Bearer ' + getToken() }
			})
				.then(() => this.loadData())
		},
		ReturnToPlantsPage() {
			this.$router.push({ name: "plants" })
		}
	},
};
</script>

<style scoped>
.slots {
	border-collapse: collapse;
	margin-bottom: 50px;
}

.slots td,
.slots th {
	border: 1px solid #000;
	min-width: 200px;
	text-align: center;
	padding: 10px;
}

.delete-btn {
	padding: 5px 10px;
	background-color: var(--main-container-border);
	color: #FFF;
	font-size: 1em;
	border: none;
	outline: none;
}
</style>