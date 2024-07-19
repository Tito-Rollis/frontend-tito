import { useEffect, useState } from 'react';
import { DropdownComponent } from './components/Dropdown';
import { Barang, Negara, Pelabuhan } from './types/Response';
import { getBarang, getNegara, getPelabuhan } from './services/api';
import { DropdownMenuRadioItem } from './components/ui/dropdown-menu';
import { TextAreaComponent } from './components/TextArea';
import { InputComponent } from './components/Input';
import { Percent } from 'lucide-react';

function App() {
    const [negara, setNegara] = useState<Negara[]>([]);
    const [indexNegara, setIndexNegara] = useState<number>(0);
    const [indexPelabuhan, setIndexPelabuhan] = useState<number>(0);
    const [indexBarang, setIndexBarang] = useState<number>(0);

    const [pelabuhan, setPelabuhan] = useState<Pelabuhan[]>([]);
    const [barang, setBarang] = useState<Barang[]>([]);

    const pelabuhanFiltered = (id_negara: string) => {
        getPelabuhan().then((resPelabuhan) => {
            // Filter Pelabuhan that has the same id_negara
            const filteredPelabuhan = resPelabuhan.filter((e) => e.id_negara === id_negara);
            setPelabuhan(filteredPelabuhan);

            // Find index of Negara that has the same id_negara for change the title of Negara Dropdown component
            setIndexNegara(negara.findIndex((e) => e.id_negara === parseInt(id_negara)));

            getBarang().then((res) => {
                // Filter Barang that has the same id_pelabuhan
                const filteredBarang = res.filter(
                    (e) =>
                        e.id_pelabuhan.toString() === resPelabuhan.find((e) => e.id_negara === id_negara)?.id_pelabuhan
                );
                setBarang(filteredBarang);
            });
        });
    };

    const barangFiltered = (id_pelabuhan: string) => {
        getBarang().then((res) => {
            setIndexPelabuhan(pelabuhan.findIndex((e) => e.id_pelabuhan === id_pelabuhan.toString()));

            // Filter Barang that has the same id_pelabuhan with parameter
            const filteredBarang = res.filter((e) => e.id_pelabuhan.toString() === id_pelabuhan);
            setBarang(filteredBarang);
        });
    };
    console.log(indexPelabuhan);
    useEffect(() => {
        getNegara().then((resNegara) => {
            setNegara(resNegara);

            getPelabuhan().then((resPelabuhan) => {
                const findIdNegara = resPelabuhan.filter((e) => e.id_negara === resNegara[0].id_negara.toString());
                if (findIdNegara !== undefined) {
                    setPelabuhan(findIdNegara);
                }
                getBarang().then((resBarang) => {
                    setBarang(resBarang.filter((e) => e.id_pelabuhan === parseInt(resPelabuhan[0].id_pelabuhan)));
                });
            });
        });
    }, []);

    return (
        <div className=" pt-4  h-screen w-screen bg-slate-800">
            <div className="flex flex-col w-1/3 gap-8 m-auto">
                {/* Negara */}
                <div className="flex flex-col  ">
                    <h1 className="text-white">Pilih Negara:</h1>

                    <DropdownComponent
                        content={negara[indexNegara]?.nama_negara}
                        title="Nama Negara"
                        handler={pelabuhanFiltered}
                    >
                        {negara.map((data) => {
                            return (
                                <>
                                    <DropdownMenuRadioItem value={data.id_negara.toString()}>
                                        {data.nama_negara}
                                    </DropdownMenuRadioItem>
                                </>
                            );
                        })}
                    </DropdownComponent>
                </div>

                {/* Pelabuhan */}
                <div className="flex flex-col  ">
                    <h1 className="text-white">Pelabuhan:</h1>

                    <DropdownComponent
                        content={pelabuhan[indexPelabuhan]?.nama_pelabuhan}
                        title="Nama Pelabuhan"
                        handler={barangFiltered}
                    >
                        {pelabuhan.map((data) => {
                            return (
                                <>
                                    <DropdownMenuRadioItem value={data.id_pelabuhan.toString()}>
                                        {data.nama_pelabuhan}
                                    </DropdownMenuRadioItem>
                                </>
                            );
                        })}
                    </DropdownComponent>
                </div>

                {/* Barang */}
                <div className="flex flex-col  ">
                    <h1 className="text-white">Barang:</h1>
                    <div className="flex flex-col gap-2">
                        <DropdownComponent content={barang[indexBarang]?.nama_barang} title="Nama Pelabuhan">
                            {barang.map((data) => {
                                return (
                                    <>
                                        <DropdownMenuRadioItem value={data.id_barang.toString()}>
                                            {data.nama_barang}
                                        </DropdownMenuRadioItem>
                                    </>
                                );
                            })}
                        </DropdownComponent>
                        <TextAreaComponent />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Discount */}
                    <div className="flex flex-col">
                        <h1 className="text-white">Discount:</h1>
                        <div className="flex items-center gap-1">
                            <InputComponent content="50" placeholder="Insert discount" />{' '}
                            <Percent className="text-white" />
                        </div>
                    </div>

                    {/* Harga */}
                    <div className="flex flex-col">
                        <h1 className="text-white">Harga:</h1>
                        <InputComponent content="12300" placeholder="Insert Price" />
                    </div>

                    {/* Total */}
                    <div className="flex flex-col">
                        <h1 className="text-white">Total:</h1>
                        <InputComponent content="Rp 1000.000" placeholder="Insert Total" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
