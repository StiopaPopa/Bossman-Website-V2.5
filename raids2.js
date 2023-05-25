window.onload = function() {
    
        // listen for auth status changes
    auth.onAuthStateChanged(user => {
        if (!user) {
        window.location = "index.html"
        }
    });
        
        // logout method
    const logout = document.getElementById('logout');
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut();
    });
    
    // stuff for raid updates
    db.collection('raidUpdates').get().then(snapshot => {
        setupRaidUpates(snapshot.docs);
    })
    const raidUpdatesList = document.getElementById('raidUpdates');
    //set up the updates
    const setupRaidUpates = (data) => {
        let html = '';
        data.forEach(doc => {
            const raidUpdate = doc.data();
            const li = `
                <li>
                    <div class="updateHeader">${raidUpdate.Title}</div>
                    <div class="updateContent">${raidUpdate.Content}</div>
                </li>
                <br><br>
            `;
            html += li;
        });
        raidUpdatesList.innerHTML = html;
    }
    


    var updateModal = document.getElementById('newUpdateModal');   
    var updateButton = document.getElementById('newUpdate');
    var closeUpdateModalButton = document.getElementById('closeUpdateModalButton');
    var newUpdateForm = document.getElementById('postUpdate');

    updateButton.addEventListener('click', openUpdateModal);
    function openUpdateModal() {
        updateModal.style.display = 'block';
    }

    closeUpdateModalButton.addEventListener("click", closeUpdateModal);
    function closeUpdateModal() {
        updateModal.style.display = "none";
        newUpdateForm.reset();
    }

    var postUpdateButton = document.getElementById('postUpdateButton');
    postUpdateButton.addEventListener('click', (e) => {
        e.preventDefault();
        var updateTitle = document.getElementById('updateTitle').value;
        var updateContent = document.getElementById('updateContent').value;
        db.collection('raidUpdates').add({
            Title: updateTitle,
            Content: updateContent
        }).then(() => {
            closeUpdateModal();
        })
    })


    var raidModal = document.getElementById('newRaidModal');   
    var raidButton = document.getElementById('newRaid');
    var closeRaidModalButton = document.getElementById('closeRaidModalButton');
    var newRaidForm = document.getElementById('postRaid');

    raidButton.addEventListener('click', openRaidModal);
    function openRaidModal() {
        raidModal.style.display = 'block';
    }

    closeRaidModalButton.addEventListener("click", closeRaidModal);
    function closeRaidModal() {
        raidModal.style.display = "none";
        newRaidForm.reset();
    }

    
}