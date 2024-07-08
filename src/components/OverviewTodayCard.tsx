import { iconsList } from "../utils/index.ts"
import iconUp from '../assets/icon-up.svg';
import iconDown from '../assets/icon-down.svg';


interface OverviewTodayCardProps {
    network: string;
    statsType: string;
    stats: number | string
    porcentage: number,
    isUp: boolean
}

const OverviewTodayCard = ({ network, statsType, stats, porcentage, isUp }: OverviewTodayCardProps) => {
    const icon = iconsList.find(item => item.network === network)?.icon;
    const iconToday = isUp ? iconUp : iconDown;
    
    return (
        <article className="bg-Light-Grayish-Blue w-80 cursor-pointer dark:bg-Dark-Desaturated-Blue dark:hover:brightness-125 hover:brightness-95 h-32 mb-4 mx-auto rounded-md p-7">
            <div className="flex justify-between mb-1">
                <p className="text-Dark-Grayish-Blue" >{statsType}</p>
                <img src={icon} alt={network} />
            </div>
            <div className="flex justify-between">
                <p className="text-4xl font-bold text-Very-Dark-Blue dark:text-white">{stats}</p>
                <div className="flex items-center justify-center gap-1" >
                    <img src={iconToday} alt="arrow" />
                    <p className={`text-xs font-bold ${isUp ? "text-Lime-Green" : "text-Bright-Red" }`} >{porcentage}%</p>
                </div>
            </div>
        </article>
    )
}

export default OverviewTodayCard;