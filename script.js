document.addEventListener('DOMContentLoaded', function() {
    // Adiciona botão animado abaixo do texto principal
    const mainCol = document.querySelector('.col-md-12');
    if (mainCol) {
        const btn = document.createElement('button');
        btn.className = 'emoji-btn';
        btn.textContent = 'Clique!';
        mainCol.appendChild(btn);

        btn.addEventListener('click', function() {
            // Remove emoji anterior se existir
            const oldEmoji = document.querySelector('.emoji-pop');
            if (oldEmoji) oldEmoji.remove();

            // Cria emoji animado
            const emoji = document.createElement('span');
            emoji.className = 'emoji-pop';
            emoji.textContent = '💙';
            btn.insertAdjacentElement('afterend', emoji);

            // Mensagem extra
            setTimeout(() => {
                if (!document.querySelector('.extra-msg')) {
                    const msg = document.createElement('div');
                    msg.className = 'extra-msg';
                    msg.style.marginTop = '18px';
                    msg.style.fontSize = '1.2rem';
                    msg.style.color = '#007bff';
                    msg.textContent = 'Eu te amo, pai!';
                    emoji.insertAdjacentElement('afterend', msg);
                }
            }, 700);
        });
    }

    function atualizarTimerPai() {
        const inicio = new Date(1970, 5, 26, 0, 0, 0); // 26/06/1970 (mês começa do zero)
        const agora = new Date();
        let anos = agora.getFullYear() - inicio.getFullYear();
        let meses = agora.getMonth() - inicio.getMonth();
        let dias = agora.getDate() - inicio.getDate();
        let horas = agora.getHours() - inicio.getHours();
        let minutos = agora.getMinutes() - inicio.getMinutes();
        let segundos = agora.getSeconds() - inicio.getSeconds();

        if (segundos < 0) {
            segundos += 60;
            minutos--;
        }
        if (minutos < 0) {
            minutos += 60;
            horas--;
        }
        if (horas < 0) {
            horas += 24;
            dias--;
        }
        if (dias < 0) {
            // Ajusta dias considerando o mês anterior
            const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
            dias += mesAnterior.getDate();
            meses--;
        }
        if (meses < 0) {
            meses += 12;
            anos--;
        }

        // Animação: timer "pulsando" a cada segundo
        const timerDiv = document.getElementById('timer-pai');
        timerDiv.innerHTML = `<span style="color:#ff9800">${anos}</span> anos, <span style="color:#ff9800">${meses}</span> meses, <span style="color:#ff9800">${dias}</span> dias, <span style="color:#ff9800">${horas}</span> horas, <span style="color:#ff9800">${minutos}</span> minutos e <span style="color:#ff9800">${segundos}</span> segundos sendo a minha inspiração!`;
        timerDiv.style.animation = 'pulseTimer 0.7s';
        setTimeout(() => { timerDiv.style.animation = ''; }, 700);
    }

    // Emojis de carro caindo
    function criarCarrosCaindo(qtd = 8) {
        for (let i = 0; i < qtd; i++) {
            const carro = document.createElement('span');
            carro.textContent = '🚗';
            carro.className = 'carro-cai';
            carro.style.left = Math.random() * 90 + 'vw';
            carro.style.fontSize = (2 + Math.random() * 2) + 'rem';
            carro.style.animationDelay = (Math.random() * 2) + 's';
            document.body.appendChild(carro);
            // Remove após animação
            carro.addEventListener('animationend', () => carro.remove());
        }
    }
    // Inicia a animação ao carregar
    criarCarrosCaindo(10);
    // Repete a cada 5 segundos
    setInterval(() => criarCarrosCaindo(5), 5000);

    // Adiciona animação CSS para carros caindo
    const styleCarro = document.createElement('style');
    styleCarro.innerHTML = `
    .carro-cai {
        position: fixed;
        top: -3rem;
        z-index: 9999;
        pointer-events: none;
        animation: carroFall 2.8s cubic-bezier(.5,.8,.5,1) forwards;
        will-change: transform, opacity;
    }
    @keyframes carroFall {
        0% { transform: translateY(0) rotate(-10deg); opacity: 1; }
        70% { opacity: 1; }
        90% { transform: translateY(85vh) rotate(10deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    }
    `;
    document.head.appendChild(styleCarro);

    // Adiciona animação CSS para o timer
    const style = document.createElement('style');
    style.innerHTML = `@keyframes pulseTimer { 0% { transform: scale(1); } 50% { transform: scale(1.08);{ transform: scale(1); background: none; } }`;
    document.head.appendChild(style);

    setInterval(atualizarTimerPai, 1000);
    atualizarTimerPai();
});