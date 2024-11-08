import {hoursLoad} from "../form/hors-load.js"

const selectedDate = document.getElementById("date")

export function schedulesDay() {
	const date = selectedDate.value

	hoursLoad({date})
}