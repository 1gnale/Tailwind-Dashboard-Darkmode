import data from "../../data/data.json"
import OverviewTodayCard from "./OverviewTodayCard.tsx"
import { convertNumberToK } from "../utils/convertNumber.ts"

const OverviewTodayContainer = () => {
    return (
        <section>
            <h2 className="text-2xl text-Very-Dark-Blue dark:text-white font-bold text-center mt-10 mb-5">Overview - Today</h2>
            <div className="flex flex-wrap left-0 gap-2 right-0">{
                data["overview-today"].map((item, idx) => {
                    return (
                        <OverviewTodayCard key={idx}
                            network={item.network}
                            statsType={item.statsType}
                            stats={convertNumberToK(item.stats)}
                            porcentage={item.porcentage}
                            isUp={item.isUp}
                        />
                    )
                })
            }</div>
        </section>
    )
}

export default OverviewTodayContainer