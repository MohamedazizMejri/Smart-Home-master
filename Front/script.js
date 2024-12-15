$(document).ready(function () {
    // Content templates
    const homeContent = [
        { id: 1, name: "Home 1" },
        { id: 2, name: "Home 2" },
    ];

    const roomContent = [
        { id: 1, name: "Living Room" },
        { id: 2, name: "Bedroom" },
    ];

    const deviceContent = [
        { id: 1, name: "Air Conditioner" },
        { id: 2, name: "Smart Light" },
    ];

    // Function to generate cards
    function generateCards(content, type) {
        return content
            .map(
                (item) => `
            <div class="col-lg-4 mb-3">
                <div class="card bg-light p-3">
                    <div class="card-menu">
                        <i class="bi bi-three-dots"></i>
                    </div>
                    <div class="text-center">
                        <i class="bi bi-${type} display-4 mb-3"></i>
                        <h6>${item.name}</h6>
                    </div>
                </div>
            </div>
        `
            )
            .join("");
    }

    // Dynamic content switching
    function updateContent(type) {
        let content;
        let icon;

        switch (type) {
            case "home":
                content = homeContent;
                icon = "house";
                break;
            case "rooms":
                content = roomContent;
                icon = "grid";
                break;
            case "devices":
                content = deviceContent;
                icon = "device-hdd";
                break;
        }

        $("#content").html(`
            <div class="row">
                ${generateCards(content, icon)}
            </div>
        `);
    }

    // Initial load
    updateContent("home");

    // Navigation handlers
    $("#nav-home").click(() => updateContent("home"));
    $("#nav-rooms").click(() => updateContent("rooms"));
    $("#nav-devices").click(() => updateContent("devices"));
});
