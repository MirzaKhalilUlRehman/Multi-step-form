 // small interaction (keeps UX polished, no network)
        document.getElementById('nextBtn').addEventListener('click', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            if (!name || !email || !phone) {
                // inline style tooltip instead of alert to match visual design
                const btn = e.currentTarget;
                const tip = document.createElement('div');
                tip.textContent = 'Please complete all fields.';
                Object.assign(tip.style, { position: 'absolute', right: '40px', top: '28px', background: '#ffefef', color: '#7b1f1f', padding: '8px 12px', borderRadius: '8px', boxShadow: '0 8px 20px rgba(11,41,73,0.06)', fontWeight: 700 });
                document.querySelector('.frame').appendChild(tip);
                setTimeout(() => tip.remove(), 1600);
                return;
            }

            const card = document.querySelector('.card');
            card.animate([{ transform: 'translateY(0px)' }, { transform: 'translateY(-6px)' }], { duration: 220, fill: 'forwards' });
            const ok = document.createElement('div');
            ok.textContent = 'Saved — moving to next step...';
            Object.assign(ok.style, { position: 'absolute', right: '36px', top: '22px', background: '#0b1b2b', color: '#fff', padding: '10px 14px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(2,6,23,0.2)', fontWeight: 700 });
            document.querySelector('.frame').appendChild(ok);
            setTimeout(() => { ok.remove(); card.animate([{ transform: 'translateY(-6px)' }, { transform: 'translateY(0px)' }], { duration: 200, fill: 'forwards' }) }, 1400);
        });