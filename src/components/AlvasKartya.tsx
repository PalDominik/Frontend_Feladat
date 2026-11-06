import { useEffect, useState } from "react";


type Alvas = {
    id: number
    nev: string
    datum: string
    alvasOra: number
    minoseg: number
    alkalmazastHasznalt: boolean
}

function Alvasok() {
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

    const [mutat, setMutat] = useState(true);


    return <>
        <h2>Alvások</h2>
        {
            alvasok.map((a) => (
                <div className="card">
                    <div className="card-header">
                        <b>{a.nev}</b>
                    </div>

                    <div className="card-body">
                        <p>Dátum: {a.datum} | Alvás mennyisége: {a.alvasOra} <br />
                            {mutat ? ("Alvás minösége: " + a.minoseg) : "Elrejtve"} | Használt-e alkalmazást: {a.alkalmazastHasznalt ? "Igen" : "Nem"}</p>
                    </div>
                </div>
            ))
        }
        < button onClick={() => setMutat(!mutat)}>
            {mutat ? "Minöség elrejtése" : "Minöség mutatása"}
        </button >




    </>
}
export default Alvasok
