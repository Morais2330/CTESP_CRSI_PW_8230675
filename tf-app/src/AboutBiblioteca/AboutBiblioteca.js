import '../NavBar/NavBar.js';
import './AboutBiblioteca.css';

function AboutBiblioteca() {
    return (
        <>
            <div className="AboutBiblioteca">
                <header className="AboutConcert-header">
                    <img src="./biblioteca.png" className="AboutConcert-logo" alt="logo" />
                    <p>
                    Esta biblioteca é uma instituição que tem à sua guarda o património bibliográfico português. Trabalham nela duzentos funcionários que, todos os dias, procuram honrar a memória de duas instituições criadas no século XVIII e apostadas em desenvolver uma estratégia de modernização. Dois objetivos principais se impõem: por um lado, o de contar com o envolvimento de todos os que aqui trabalham, no sentido de articular a biblioteca com os mais inovadores sistemas de informação; por outro lado, o de nos colocarmos a par de instituições congéneres. Na concretização destes dois objetivos, lutaremos por procedimentos democráticos e faremos todo o possível para nos internacionalizar. A nossa missão e sentido de serviço público correspondem à ambição, que não é pequena, de sermos uma instituição de referência no quadro mais geral da cultura portuguesa.
                    </p>
                </header>
            </div>
            </>

);
}

export default AboutBiblioteca;

