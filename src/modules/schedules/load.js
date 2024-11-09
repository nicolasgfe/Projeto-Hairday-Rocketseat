import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hors-load.js"
import { schedulesShow } from "./show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
	console.log("schedulesday");
	
	const date = selectedDate.value

	const dailySchedules = await scheduleFetchByDay({ date })
	
	schedulesShow({ dailySchedules })

	hoursLoad({ date, dailySchedules })
}