import {Serie} from './serie.js';
import {series} from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;

mostrarDatosSeries(series);

function mostrarDatosSeries(dataSeries: Serie[]
    ): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let serie of dataSeries){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.classList.add("table-light");
        trElement.innerHTML = `<td style="font-weight:bold;">${serie.numero}</td>
        <td style="color:#4099e0;font-weight:500;">${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }
    
    let promedio = darPromedioTemporadas(series);

    let trElement: HTMLElement = document.createElement("tr")
    trElement.innerHTML = `<td colspan="2">Seasons average: ${promedio}</td>
    <td></td><td></td><td></td>`;
    seriesTbody.appendChild(trElement);

    seriesTable.appendChild(seriesTbody);

}

function darPromedioTemporadas(series: Serie[]): number{
    let promedio:number = 0;
    for(let index=0; index<series.length;index++){
        let serie: Serie = series[index];
        promedio+=serie.temporadas;
    }
    return promedio/series.length

}