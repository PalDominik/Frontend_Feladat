import { useEffect, useState } from "react";



type Alvas = {
    id: number
    nev: string
    datum: string
    alvasOra: number
    minoseg: number
    alkalmazastHasznalt: boolean
}

function AdatKiiras() {
    const [alvasok, setAlvasok] = useState<Alvas[]>([]);
    useEffect(() => {
        async function alvasokLekerdezese() {
            try {
                const valasz = await fetch("./alvasok.json")
                if (!valasz.ok) throw new Error("HTTP hiba: " + valasz.status)
                const adatok: Alvas[] = await valasz.json()
                setAlvasok(adatok)
            } catch (err) {
                console.error("Gatya matya", err)
            }
        }
        alvasokLekerdezese()
    }, [])

    let people_count = 0;
    let sleep_sum = 0;
    let quality_count = 0;
    alvasok.map(a => (
        (sleep_sum += a.alvasOra, people_count += 1, quality_count += (a.minoseg > 75) ? 1 : 0)
    ))
    const sleep_avg = sleep_sum / people_count

    return <>
        <h2>Statisztikák</h2>
        <p>Emberek száma: {people_count} | Átlag alvás: {sleep_avg} | Minöségi alvást végzö emberek száma: {quality_count} </p>
    </>

}

export default AdatKiiras