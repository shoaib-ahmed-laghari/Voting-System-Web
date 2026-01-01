let votes = { A: 0, B: 0, C: 0 };

function verifyVoter() {
    const cnic = document.getElementById('cnic').value;
    const age = document.getElementById('age').value;
    const status = document.getElementById('status');

    // Validation Logic
    if (cnic.length < 5) {
        status.innerHTML = "<span class='error'>Sahi CNIC likhain!</span>";
    } else if (age < 18) {
        status.innerHTML = "<span class='error'>Maazrat! Sirf 18+ log vote de sakte hain.</span>";
    } else {
        status.innerHTML = "<span class='success'>Verification Successful! Vote dein.</span>";
        document.getElementById('authSection').classList.add('hidden');
        document.getElementById('votingSection').classList.remove('hidden');
    }
}

function castVote(candidate) {
    votes[candidate]++;
    alert(`Shukriya! Aapka vote ${candidate} ko chala gaya.`);
    // Vote dene ke baad wapis login par le jayen (Security ke liye)
    location.reload();
}

function toggleResults() {
    const box = document.getElementById('resultBox');
    document.getElementById('resA').innerText = votes.A;
    document.getElementById('resB').innerText = votes.B;
    document.getElementById('resC').innerText = votes.C;
    box.classList.toggle('hidden');
}

function resetSystem() {
    if (confirm("Kya aap pura system reset karna chahte hain?")) {
        location.reload();
    }
}