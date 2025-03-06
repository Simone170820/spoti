/* Body e design generale */
body {
    background-color: #000000;
    font-family: Arial, sans-serif;
}

/* Bottone del menu (spostato a sinistra) */
.menu-toggle {
    display: none;
    color: white;
    background: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    left: 1rem;
    top: 1rem;
}

/* Sidebar */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100%;
    background-color: #000;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform: translateX(-240px);
    transition: transform 0.3s ease-in-out;
}

.sidebar.active {
    transform: translateX(0);
}

.sidebar h1 {
    font-size: 2rem;
    color: #00aaff;
    margin-bottom: 40px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    margin-bottom: 30px;
}

.sidebar ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.4rem;
    display: block;
    padding: 10px;
    transition: color 0.3s;
}

.sidebar ul li a:hover {
    color: #00aaff;
}

/* Navbar */
.navbar {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.navbar ul {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

.navbar ul li {
    list-style: none;
}

.navbar ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.navbar ul li a:hover {
    color: #00aaff;
}

/* Audio Player */
.audio-player {
    background-color: #2d2d2d;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
}

.audio-player img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
}

.player-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: #1e1e1e;
    border-radius: 30px;
}

.player-controls button {
    background: none;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 20px;
}

.seek-bar {
    flex-grow: 1;
    height: 5px;
    background-color: #ffffff;
    border-radius: 5px;
}

.seek-bar::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    background-color: #00aaff;
    border-radius: 50%;
    cursor: pointer;
}

/* Media Query per Dispositivi Mobili */
@media (max-width: 768px) {
    .sidebar {
        transform: translateX(-240px);
    }

    .sidebar.active {
        transform: translateX(0);
    }

    .navbar ul {
        display: none;
    }

    .navbar ul.active {
        display: flex;
    }

    .menu-toggle {
        display: block;
    }
}
