import { Modal } from "react-bootstrap";
const Pokeinfo = ({ data, handleClose, showModal }) => {
    return (
        <>
            {
                (!data) ? "" :
                    (
                        <>
                            <Modal show={showModal} onHide={handleClose}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>{data.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="poke-content">
                                    <img src={data.sprites.front_default} alt="ResponsiveImage" className="img-fluid img-height" />
                                    <p>
                                        Height : {data.height}
                                    </p>

                                    <p>
                                        Weight : {data.weight}
                                    </p>
                                    <p>Moves : {data.moves.length}</p>
                                    <div className="base-stat">
                                        {
                                            data.stats.map(poke => {
                                                return (
                                                    <>
                                                        <p key={poke.id}>{poke.stat.name.charAt(0).toUpperCase() + poke.stat.name.slice(1)} : {poke.base_stat}</p>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                    <>
                                        <span>Abilities : </span>
                                        {
                                            data.abilities.map((poke) => {
                                                return (
                                                    <>
                                                        <div key={poke.id} className="abilities">
                        
                                                            <p> {poke.ability.name} &nbsp;</p>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                    </>
                                </Modal.Body>
                            </Modal>

                        </>
                    )

            }
        </>
    )
}
export default Pokeinfo