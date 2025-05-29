import BarChartBox from '../../components/barChartBox/barChartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'
import ChartBox from '../../components/cartBox/chartBox'
import PieCharts from '../../components/pieCharts/PieCharts'
import TopDetal from '../../components/topDealBox/topDeal'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../Data'
import './home.scss'

export default function Home() {
  return (
    <section className='homeSec'>
      <div className="container">
        <div className="box box1">
          <TopDetal/>
        </div>
        <div className="box box2"><ChartBox {...chartBoxConversion}/></div>
        <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
        <div className="box box4"><PieCharts/></div>
        <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
        <div className="box box6"><ChartBox  {...chartBoxUser}/></div>
        <div className="box box7"><BigChartBox/></div>
        <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div>
        <div className="box box9"><BarChartBox {...barChartBoxVisit}/></div>
      </div>
    </section>
  )
}
