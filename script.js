// Movie database with mood-based recommendations
const movieDatabase = {
    hollywood: {
        happy: [
            { title: "La La Land", genre: "Musical/Romance", year: 2016, description: "A jazz pianist falls for an aspiring actress in Los Angeles.", rating: "8.0/10", image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg" },
            { title: "The Secret Life of Walter Mitty", genre: "Adventure/Comedy", year: 2013, description: "A day-dreamer escapes his anonymous life by disappearing into a world of fantasies.", rating: "7.3/10", image: "https://m.media-amazon.com/images/M/MV5BZDgwMDQ5NTE1OV5BMl5BanBnXkFtZTcwMDI5OTY0OQ@@._V1_.jpg" },
            { title: "The Greatest Showman", genre: "Musical/Drama", year: 2017, description: "Inspired by the imagination of P.T. Barnum, this musical celebrates the birth of show business.", rating: "7.6/10", image: "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwNDczNTM@._V1_.jpg" },
            { title: "Mamma Mia!", genre: "Musical/Comedy", year: 2008, description: "The story of a bride-to-be trying to find her real father told using hit songs by the popular 1970s group ABBA.", rating: "6.4/10", image: "https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_.jpg" }
        ],
        sad: [
            { title: "The Notebook", genre: "Romance/Drama", year: 2004, description: "A poor yet passionate young man falls in love with a rich young woman.", rating: "7.8/10", image: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg" },
            { title: "The Fault in Our Stars", genre: "Romance/Drama", year: 2014, description: "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author.", rating: "7.7/10", image: "https://m.media-amazon.com/images/M/MV5BMjA4NzkxNzc5Ml5BMl5BanBnXkFtZTgwMDQyNTM4MTE@._V1_.jpg" },
            { title: "Me Before You", genre: "Romance/Drama", year: 2016, description: "A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.", rating: "7.4/10", image: "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NTM0NF5BMl5BanBnXkFtZTgwMjA3OTI3OTE@._V1_.jpg" }
        ],
        excited: [
            { title: "Avengers: Endgame", genre: "Action/Adventure", year: 2019, description: "After the devastating events of Avengers: Infinity War, the universe is in ruins.", rating: "8.4/10", image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" },
            { title: "Inception", genre: "Action/Sci-Fi", year: 2010, description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", rating: "8.8/10", image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" },
            { title: "Mad Max: Fury Road", genre: "Action/Adventure", year: 2015, description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.", rating: "8.1/10", image: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTcwNGY1MTlBY1E@._V1_.jpg" }
        ],
        relaxed: [
            { title: "The Secret Garden", genre: "Drama/Family", year: 2020, description: "A young, recently-orphaned girl is sent to England, and begins to explore her new home.", rating: "7.3/10", image: "https://m.media-amazon.com/images/M/MV5BNjRiNWNjYzUtY2I5MC00MDIwLTgzMDMtNDk4ZTY0YThlM2UyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
            { title: "Paddington", genre: "Family/Comedy", year: 2014, description: "A young Peruvian bear travels to London in search of a home.", rating: "7.2/10", image: "https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk3NzUyMDEz._V1_.jpg" },
            { title: "The Hundred-Foot Journey", genre: "Drama/Comedy", year: 2014, description: "The Kadam family leaves India for France where they open a restaurant directly across the road from Madame Mallory's Michelin-starred eatery.", rating: "7.3/10", image: "https://m.media-amazon.com/images/M/MV5BMTk2MjQ5OTM2NF5BMl5BanBnXkFtZTgwMDI5NjQxMTE@._V1_.jpg" }
        ]
    },
    bollywood: {
        happy: [
            { title: "3 Idiots", genre: "Comedy/Drama", year: 2009, description: "Two friends are searching for their long lost companion who inspired them to think differently.", rating: "8.4/10", image: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhMzQtNmMzNmMyMmY1ZGYxXkEyXkFqcGdeQXVyMTExNDQzMTk@._V1_.jpg" },
            { title: "Zindagi Na Milegi Dobara", genre: "Comedy/Drama", year: 2011, description: "Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.", rating: "8.2/10", image: "https://m.media-amazon.com/images/M/MV5BZjdjOWIxMDctYTczOS00ODRlLWJhOTktOTU2MDg3NzQ4NzcyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
            { title: "Dil Chahta Hai", genre: "Comedy/Drama", year: 2001, description: "Three inseparable childhood friends are just out of college. Nothing comes between them - until they each fall in love.", rating: "8.1/10", image: "https://m.media-amazon.com/images/M/MV5BMjRjMTYwMTYtMmRkNy00YTYxLWE3NTQtNzQwMDAzNmY4ZjlkXkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_.jpg" }
        ],
        sad: [
            { title: "Kal Ho Naa Ho", genre: "Romance/Drama", year: 2003, description: "A terminally ill man tries to bring together two people who love each other.", rating: "8.1/10", image: "https://m.media-amazon.com/images/M/MV5BNmE4YjYzYTktMjY4Ny00YTE1LWE1ZTUtNzk5YzEyZDAwMDY1XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg" },
            { title: "Taare Zameen Par", genre: "Drama/Family", year: 2007, description: "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.", rating: "8.4/10", image: "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtNDdkNmM1MjUxYWIyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" },
            { title: "My Name is Khan", genre: "Drama/Romance", year: 2010, description: "An Indian Muslim man with Asperger's syndrome takes a challenge to speak to the President of the United States seriously and embarks on a cross-country journey.", rating: "8.0/10", image: "https://m.media-amazon.com/images/M/MV5BMTUyMTA4NDYzMV5BMl5BanBnXkFtZTcwMjk2NzA1Nw@@._V1_.jpg" }
        ],
        excited: [
            { title: "Dhoom", genre: "Action/Crime", year: 2004, description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", rating: "6.8/10", image: "https://m.media-amazon.com/images/M/MV5BMTU1NDY4NjU5NF5BMl5BanBnXkFtZTcwMzA0NjQyMw@@._V1_.jpg" },
            { title: "Sultan", genre: "Action/Drama", year: 2016, description: "A former wrestler-turned-pehlwan attempts a comeback by participating in a wrestling championship.", rating: "7.8/10", image: "https://m.media-amazon.com/images/M/MV5BMjQwODU1OWUtY2U0Yy00MDVjLTkyNzEtNjM5Y2I5ZjM5YzM2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" },
            { title: "War", genre: "Action/Thriller", year: 2019, description: "An Indian soldier is assigned to eliminate his former mentor and he must keep his wits about him if he's to succeed.", rating: "6.5/10", image: "https://m.media-amazon.com/images/M/MV5BYzE4MTllZTktMTIyZS00Yzg1LTg1YzAtMWQwZTZkNjA0NjNjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" }
        ],
        relaxed: [
            { title: "Piku", genre: "Comedy/Drama", year: 2015, description: "A quirky father-daughter relationship is tested when they embark on a road trip to Kolkata.", rating: "7.8/10", image: "https://m.media-amazon.com/images/M/MV5BMTUyMTA4NDYzMV5BMl5BanBnXkFtZTcwMjk2NzA1Nw@@._V1_.jpg" },
            { title: "Lunchbox", genre: "Drama/Romance", year: 2013, description: "A mistaken delivery in Mumbai's famously efficient lunchbox delivery system connects a young housewife to an older man.", rating: "7.8/10", image: "https://m.media-amazon.com/images/M/MV5BMTYwNjU5MTYzNF5BMl5BanBnXkFtZTgwODU5ODM5MDE@._V1_.jpg" },
            { title: "Queen", genre: "Comedy/Drama", year: 2013, description: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.", rating: "8.2/10", image: "https://m.media-amazon.com/images/M/MV5BNWYyOWRlOWItZWM5MS00ZjJkLWI0MTUtYTE3NTI5MDAwYjgyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" }
        ]
    },
    tollywood: {
        happy: [
            { title: "RRR", genre: "Action/Drama", year: 2022, description: "A tale of two legendary revolutionaries and their journey far away from home.", rating: "7.8/10", image: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUyNy00ZDU4LWI3MzktOjMzNzZiZjE3Yzc3XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg" },
            { title: "Pushpa: The Rise", genre: "Action/Drama", year: 2021, description: "A laborer rises through the ranks of a red sandalwood smuggling syndicate.", rating: "7.6/10", image: "https://m.media-amazon.com/images/M/MV5BOTc2ZTlmYmItMDBhNS00YmJjLWEyM2UtOTM2N2QyMDM2MmFiXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_.jpg" },
            { title: "KGF: Chapter 1", genre: "Action/Drama", year: 2018, description: "In the 1970s, a gangster tries to keep a promise made to his dying mother and takes on the otherworldly fearsome KGF.", rating: "8.2/10", image: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_.jpg" }
        ],
        sad: [
            { title: "Baahubali: The Beginning", genre: "Action/Drama", year: 2015, description: "A young man is raised by tribal people and one day learns about his royal heritage.", rating: "8.0/10", image: "https://m.media-amazon.com/images/M/MV5BYmJlMTk3MDctYmI0ZC00ZjlkLTk5ZjQtNzM4YzVjOTQ5MWY4XkEyXkFqcGdeQXVyOTA0MTIzODA@._V1_.jpg" },
            { title: "Magadheera", genre: "Action/Romance", year: 2009, description: "A warrior and a princess fall in love, but their romance is cut short by a treacherous minister.", rating: "7.5/10", image: "https://m.media-amazon.com/images/M/MV5BMTU1NDY4NjU5NF5BMl5BanBnXkFtZTcwMzA0NjQyMw@@._V1_.jpg" },
            { title: "Eega", genre: "Action/Fantasy", year: 2012, description: "A murdered man is reborn as a housefly and seeks to avenge his death.", rating: "7.8/10", image: "https://m.media-amazon.com/images/M/MV5BMTU1NDY4NjU5NF5BMl5BanBnXkFtZTcwMzA0NjQyMw@@._V1_.jpg" }
        ],
        excited: [
            { title: "KGF: Chapter 2", genre: "Action/Drama", year: 2022, description: "Rocky takes control of the Kolar Gold Fields and his newfound power makes the government as well as his enemies jittery.", rating: "8.4/10", image: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
            { title: "Robot 2.0", genre: "Action/Sci-Fi", year: 2018, description: "A scientist creates a robot to help him fight against a ghost who is attacking the city.", rating: "7.0/10", image: "https://m.media-amazon.com/images/M/MV5BMTU1NDY4NjU5NF5BMl5BanBnXkFtZTcwMzA0NjQyMw@@._V1_.jpg" },
            { title: "Saaho", genre: "Action/Thriller", year: 2019, description: "A police officer's investigation of a robbery leads him to uncover a larger conspiracy.", rating: "6.5/10", image: "https://m.media-amazon.com/images/M/MV5BMTU1NDY4NjU5NF5BMl5BanBnXkFtZTcwMzA0NjQyMw@@._V1_.jpg" }
        ],
        relaxed: [
            { title: "Jersey", genre: "Drama/Sports", year: 2019, description: "A failed cricketer decides to revive his cricketing career as a bowler when his son wishes to own a jersey.", rating: "8.5/10", image: "https://m.media-amazon.com/images/M/MV5BMTU1NDY4NjU5NF5BMl5BanBnXkFtZTcwMzA0NjQyMw@@._V1_.jpg" },
            { title: "Mahanati", genre: "Biography/Drama", year: 2018, description: "The life of Savitri, an actress from the 1950s and 1960s, who ruled the South Indian cinema.", rating: "8.4/10", image: "https://m.media-amazon.com/images/M/MV5BMTU1NDY4NjU5NF5BMl5BanBnXkFtZTcwMzA0NjQyMw@@._V1_.jpg" },
            { title: "C/o Kancharapalem", genre: "Drama/Romance", year: 2018, description: "Four love stories set in the village of Kancharapalem.", rating: "8.3/10", image: "https://m.media-amazon.com/images/M/MV5BMTU1NDY4NjU5NF5BMl5BanBnXkFtZTcwMzA0NjQyMw@@._V1_.jpg" }
        ]
    }
};

// Additional movie genres for personalized recommendations
const additionalGenres = {
    action: [
        { title: "The Dark Knight", genre: "Action/Drama", year: 2008, description: "A superhero film that explores themes of chaos and order.", rating: 9.0, image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
        { title: "Mission: Impossible - Fallout", genre: "Action/Thriller", year: 2018, description: "An action-packed spy thriller with stunning stunts.", rating: 7.7, image: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7tLnmxjn3gB4S0.jpg" }
    ],
    comedy: [
        { title: "The Hangover", genre: "Comedy", year: 2009, description: "A hilarious comedy about a bachelor party gone wrong.", rating: 7.7, image: "https://image.tmdb.org/t/p/w500/isKG6vwxRmLTVaGs4VNvEeHsUVX.jpg" },
        { title: "Superbad", genre: "Comedy", year: 2007, description: "A coming-of-age comedy about high school friends.", rating: 7.6, image: "https://image.tmdb.org/t/p/w500/ek8e8fxU1UZn4IYpC17MvFfMh6O.jpg" }
    ],
    drama: [
        { title: "The Shawshank Redemption", genre: "Drama", year: 1994, description: "A powerful story of hope and friendship in prison.", rating: 9.3, image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
        { title: "Forrest Gump", genre: "Drama/Romance", year: 1994, description: "A heartwarming story of a man with a low IQ who influences history.", rating: 8.8, image: "https://image.tmdb.org/t/p/w500/arwBvcDveoOltQFiGIATaaCgeXQ.jpg" }
    ],
    sciFi: [
        { title: "The Matrix", genre: "Sci-Fi/Action", year: 1999, description: "A groundbreaking sci-fi film about reality and consciousness.", rating: 8.7, image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
        { title: "Interstellar", genre: "Sci-Fi/Adventure", year: 2014, description: "An epic space adventure about time, gravity, and love.", rating: 8.6, image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" }
    ]
};

// Mood responses with more variety
const moodResponses = {
    happy: [
        "I'm glad you're feeling happy! Let me find something uplifting for you.",
        "Happiness is contagious! Here's a movie to keep that good mood going.",
        "Your positive energy is inspiring! This movie will match your happy vibe.",
        "A happy mood calls for a feel-good movie! Here's something to brighten your day even more."
    ],
    sad: [
        "I'm sorry you're feeling down. Here's a movie that might lift your spirits.",
        "It's okay to feel sad sometimes. This movie might help you process those feelings.",
        "I hope this movie brings you some comfort during this time.",
        "Sometimes a good cry can be therapeutic. This movie might help with that."
    ],
    excited: [
        "Your excitement is contagious! Let's find something thrilling for you.",
        "I love your energy! Here's a movie that will match your excitement.",
        "Let's channel that excitement into an amazing movie experience!",
        "With all that excitement, you need a movie that keeps the energy high!"
    ],
    relaxed: [
        "A relaxed mood is perfect for some gentle entertainment.",
        "Time to kick back and enjoy something calming.",
        "Let's find something that matches your peaceful vibe.",
        "Relaxation calls for a movie that won't stress you out. Here's a perfect match."
    ],
    romantic: [
        "Love is in the air! Here's a romantic movie for you.",
        "Romance is always a good choice! Let me find something special for you.",
        "Time for some love and romance! Here's a perfect movie for that mood.",
        "Nothing beats a romantic movie when you're in the mood for love!"
    ],
    thrilled: [
        "You're in the mood for some thrills! Let's find something exciting.",
        "Time for some edge-of-your-seat entertainment!",
        "Let's get your heart racing with this thrilling movie!",
        "Thrills and chills coming right up! Here's a movie that will keep you on the edge of your seat."
    ]
};

// Industry responses
const industryResponses = {
    hollywood: [
        "Great choice! Hollywood movies are known for their high production values and star power.",
        "You've selected Hollywood! Let me find something amazing from the world's biggest film industry.",
        "Hollywood it is! Get ready for some blockbuster entertainment.",
        "Excellent choice! Hollywood movies are perfect for any mood."
    ],
    bollywood: [
        "Wonderful! Bollywood movies are known for their vibrant colors and emotional storytelling.",
        "You've chosen Bollywood! Let me find something special from India's film industry.",
        "Bollywood it is! Get ready for some musical magic and dramatic moments.",
        "Great choice! Bollywood movies are perfect for any occasion."
    ],
    tollywood: [
        "Excellent! Tollywood movies are known for their action sequences and larger-than-life stories.",
        "You've selected Tollywood! Let me find something exciting from South Indian cinema.",
        "Tollywood it is! Get ready for some epic entertainment.",
        "Perfect choice! Tollywood movies are known for their unique style and energy."
    ]
};

// User preferences
let userPreferences = {
    name: "",
    favoriteGenres: [],
    watchedMovies: [],
    theme: localStorage.getItem('theme') || 'light',
    fontSize: localStorage.getItem('fontSize') || 'medium',
    selectedIndustry: null
};

// DOM Elements - with error handling
let chatBox, userInput, sendBtn, moodButtons, themeToggle, settingsToggle, 
    settingsPanel, closeSettingsBtn, fontSizeButtons, nameInput, saveNameBtn, 
    genreCheckboxes, watchlistContainer, body, container;

// Initialize DOM elements with error handling
function initializeDOMElements() {
    chatBox = document.getElementById('chatBox');
    userInput = document.getElementById('userInput');
    sendBtn = document.getElementById('sendBtn');
    moodButtons = document.querySelectorAll('.mood-btn');
    themeToggle = document.querySelector('.theme-toggle');
    settingsToggle = document.querySelector('.settings-toggle');
    settingsPanel = document.querySelector('.settings-panel');
    closeSettingsBtn = document.getElementById('closeSettingsBtn');
    fontSizeButtons = document.querySelectorAll('.font-size-btn');
    nameInput = document.getElementById('nameInput');
    saveNameBtn = document.getElementById('saveNameBtn');
    genreCheckboxes = document.querySelectorAll('.genre-checkboxes input');
    watchlistContainer = document.getElementById('watchlist');
    body = document.body;
    container = document.querySelector('.container');
    
    // Check if essential elements exist
    if (!chatBox || !userInput || !sendBtn) {
        console.error("Essential DOM elements not found. The application may not function correctly.");
    }
}

// Initialize user preferences
function initializeUserPreferences() {
    try {
        // Check for saved preferences
        const savedPreferences = localStorage.getItem('userPreferences');
        if (savedPreferences) {
            userPreferences = JSON.parse(savedPreferences);
        }
        
        // Apply saved theme
        if (body) {
            body.setAttribute('data-theme', userPreferences.theme);
            updateThemeIcon(userPreferences.theme);
        }
        
        // Apply saved font size
        applyFontSize(userPreferences.fontSize);
        
        // If user has a name, personalize the greeting
        if (userPreferences.name && chatBox) {
            const greetingMessage = document.querySelector('.chat-message.bot .message-content');
            if (greetingMessage) {
                greetingMessage.textContent = `Hi ${userPreferences.name}! I'm your movie recommendation assistant. How are you feeling today?`;
            }
        }
    } catch (error) {
        console.error("Error initializing user preferences:", error);
    }
}

// Apply font size
function applyFontSize(size) {
    try {
        const sizes = {
            small: '14px',
            medium: '16px',
            large: '18px'
        };
        
        document.documentElement.style.setProperty('--base-font-size', sizes[size]);
        localStorage.setItem('fontSize', size);
        userPreferences.fontSize = size;
        saveUserPreferences();
    } catch (error) {
        console.error("Error applying font size:", error);
    }
}

// Save user preferences
function saveUserPreferences() {
    try {
        localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
    } catch (error) {
        console.error("Error saving user preferences:", error);
    }
}

// Check for saved theme preference
function initializeTheme() {
    try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && body) {
            body.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
        }
    } catch (error) {
        console.error("Error initializing theme:", error);
    }
}

// Add event listeners
function setupEventListeners() {
    if (sendBtn) {
        sendBtn.addEventListener('click', handleUserInput);
    }
    
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleUserInput();
        });
    }
    
    if (moodButtons && moodButtons.length > 0) {
        moodButtons.forEach(button => {
            button.addEventListener('click', () => {
                const mood = button.getAttribute('data-mood');
                handleMoodSelection(mood);
            });
        });
    }
    
    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            userPreferences.theme = newTheme;
            saveUserPreferences();
            updateThemeIcon(newTheme);
            
            // Add animation to the container
            if (container) {
                container.style.animation = 'none';
                container.offsetHeight; // Trigger reflow
                container.style.animation = 'fadeIn 0.5s ease-out';
            }
        });
    }
    
    // Settings panel functionality
    if (settingsToggle) {
        settingsToggle.addEventListener('click', () => {
            if (settingsPanel) {
                settingsPanel.classList.add('active');
                updateSettingsPanel();
            }
        });
    }
    
    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', () => {
            if (settingsPanel) {
                settingsPanel.classList.remove('active');
            }
        });
    }
    
    // Font size buttons
    if (fontSizeButtons && fontSizeButtons.length > 0) {
        fontSizeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const size = btn.getAttribute('data-size');
                applyFontSize(size);
                
                // Update active button
                fontSizeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
    
    // Save name button
    if (saveNameBtn) {
        saveNameBtn.addEventListener('click', () => {
            const name = nameInput.value.trim();
            if (name) {
                userPreferences.name = name;
                saveUserPreferences();
                
                // Update greeting if it's the initial message
                const greetingMessage = document.querySelector('.chat-message.bot .message-content');
                if (greetingMessage && greetingMessage.textContent.includes("Hi!")) {
                    greetingMessage.textContent = `Hi ${userPreferences.name}! I'm your movie recommendation assistant. How are you feeling today?`;
                }
                
                // Show confirmation
                addTypingMessage(`I'll remember your name, ${userPreferences.name}!`, 'bot');
            }
        });
    }
    
    // Genre checkboxes
    if (genreCheckboxes && genreCheckboxes.length > 0) {
        genreCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const genre = checkbox.value;
                if (checkbox.checked) {
                    if (!userPreferences.favoriteGenres.includes(genre)) {
                        userPreferences.favoriteGenres.push(genre);
                    }
                } else {
                    const index = userPreferences.favoriteGenres.indexOf(genre);
                    if (index !== -1) {
                        userPreferences.favoriteGenres.splice(index, 1);
                    }
                }
                saveUserPreferences();
            });
        });
    }
}

function updateThemeIcon(theme) {
    try {
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fas fa-sun';
                } else {
                    icon.className = 'fas fa-moon';
                }
            }
        }
    } catch (error) {
        console.error("Error updating theme icon:", error);
    }
}

// Update settings panel with current user preferences
function updateSettingsPanel() {
    try {
        // Set font size buttons
        if (fontSizeButtons && fontSizeButtons.length > 0) {
            fontSizeButtons.forEach(btn => {
                if (btn.getAttribute('data-size') === userPreferences.fontSize) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
        
        // Set name input
        if (nameInput) {
            nameInput.value = userPreferences.name;
        }
        
        // Set genre checkboxes
        if (genreCheckboxes && genreCheckboxes.length > 0) {
            genreCheckboxes.forEach(checkbox => {
                checkbox.checked = userPreferences.favoriteGenres.includes(checkbox.value);
            });
        }
        
        // Update watchlist
        updateWatchlistDisplay();
    } catch (error) {
        console.error("Error updating settings panel:", error);
    }
}

// Update watchlist display
function updateWatchlistDisplay() {
    try {
        if (!watchlistContainer) return;
        
        watchlistContainer.innerHTML = '';
        
        if (userPreferences.watchedMovies.length === 0) {
            watchlistContainer.innerHTML = '<p class="empty-watchlist">Your watchlist is empty</p>';
            return;
        }
        
        userPreferences.watchedMovies.forEach(movie => {
            const watchlistItem = document.createElement('div');
            watchlistItem.className = 'watchlist-item';
            watchlistItem.innerHTML = `
                <span>${movie}</span>
                <button class="remove-btn" data-title="${movie}"><i class="fas fa-times"></i></button>
            `;
            watchlistContainer.appendChild(watchlistItem);
        });
        
        // Add event listeners to remove buttons
        const removeButtons = watchlistContainer.querySelectorAll('.remove-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const title = btn.getAttribute('data-title');
                const index = userPreferences.watchedMovies.indexOf(title);
                if (index !== -1) {
                    userPreferences.watchedMovies.splice(index, 1);
                    saveUserPreferences();
                    updateWatchlistDisplay();
                }
            });
        });
    } catch (error) {
        console.error("Error updating watchlist display:", error);
    }
}

// Handle user input
function handleUserInput() {
    try {
        if (!userInput) return;
        
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userInput.value = '';
            processUserMessage(message);
        }
    } catch (error) {
        console.error("Error handling user input:", error);
    }
}

// Handle mood selection
function handleMoodSelection(mood) {
    const clickedButton = document.querySelector(`[data-mood="${mood}"]`);
    if (clickedButton) {
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        clickedButton.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 1000);
        
        // Add click animation
        clickedButton.classList.add('clicked');
        setTimeout(() => clickedButton.classList.remove('clicked'), 300);
    }
    
    addMessage(`I'm feeling ${mood}!`, 'user');
    recommendMovies(userPreferences.selectedIndustry, mood);
}

// Process user message
function processUserMessage(message) {
    try {
        if (!message.trim()) return;

        // Add user message to chat
        addMessage(message, 'user');

        // Process the message
        const lowerMessage = message.toLowerCase();

        // Check for industry selection
        if (lowerMessage.includes('hollywood') || lowerMessage.includes('bollywood') || lowerMessage.includes('tollywood')) {
            const industry = lowerMessage.includes('hollywood') ? 'hollywood' : 
                           lowerMessage.includes('bollywood') ? 'bollywood' : 'tollywood';
            userPreferences.selectedIndustry = industry;
            saveUserPreferences();
            
            // Show mood selection for the selected industry
            addTypingMessage(`Great choice! I have some amazing ${industry} movies for you. How are you feeling today?`);
            setTimeout(() => {
                addMoodButtons();
            }, 1500);
            return;
        }

        // Check for name input
        if (lowerMessage.includes('my name is') || lowerMessage.includes('i am') || lowerMessage.includes('call me')) {
            const nameMatch = message.match(/(?:my name is|i am|call me)\s+([a-zA-Z]+)/i);
            if (nameMatch && nameMatch[1]) {
                userPreferences.name = nameMatch[1];
                saveUserPreferences();
                addTypingMessage(`Nice to meet you, ${userPreferences.name}! How are you feeling today?`, 'bot');
                return;
            }
        }
        
        // Check for font size preference
        if (lowerMessage.includes('font size') || lowerMessage.includes('text size')) {
            if (lowerMessage.includes('small')) {
                applyFontSize('small');
                addTypingMessage("I've changed the font size to small. How's that?", 'bot');
                return;
            } else if (lowerMessage.includes('large') || lowerMessage.includes('big')) {
                applyFontSize('large');
                addTypingMessage("I've increased the font size. Is that better?", 'bot');
                return;
            } else if (lowerMessage.includes('medium') || lowerMessage.includes('normal')) {
                applyFontSize('medium');
                addTypingMessage("I've set the font size to medium. How does that look?", 'bot');
                return;
            }
        }
        
        // Check for genre preference
        if (lowerMessage.includes('genre') || lowerMessage.includes('type of movie')) {
            if (lowerMessage.includes('action')) {
                userPreferences.favoriteGenres.push('action');
                saveUserPreferences();
                addTypingMessage("I'll recommend more action movies for you! How are you feeling today?", 'bot');
                return;
            } else if (lowerMessage.includes('comedy')) {
                userPreferences.favoriteGenres.push('comedy');
                saveUserPreferences();
                addTypingMessage("I'll recommend more comedies for you! How are you feeling today?", 'bot');
                return;
            } else if (lowerMessage.includes('drama')) {
                userPreferences.favoriteGenres.push('drama');
                saveUserPreferences();
                addTypingMessage("I'll recommend more dramas for you! How are you feeling today?", 'bot');
                return;
            } else if (lowerMessage.includes('sci-fi') || lowerMessage.includes('science fiction')) {
                userPreferences.favoriteGenres.push('sciFi');
                saveUserPreferences();
                addTypingMessage("I'll recommend more sci-fi movies for you! How are you feeling today?", 'bot');
                return;
            }
        }
        
        // Check for mood keywords
        if (lowerMessage.includes('happy') || lowerMessage.includes('joy') || lowerMessage.includes('good')) {
            recommendMovies(userPreferences.selectedIndustry, 'happy');
        } else if (lowerMessage.includes('sad') || lowerMessage.includes('down') || lowerMessage.includes('blue')) {
            recommendMovies(userPreferences.selectedIndustry, 'sad');
        } else if (lowerMessage.includes('excited') || lowerMessage.includes('thrilled') || lowerMessage.includes('pumped')) {
            recommendMovies(userPreferences.selectedIndustry, 'excited');
        } else if (lowerMessage.includes('relaxed') || lowerMessage.includes('calm') || lowerMessage.includes('peaceful')) {
            recommendMovies(userPreferences.selectedIndustry, 'relaxed');
        } else if (lowerMessage.includes('romantic') || lowerMessage.includes('love') || lowerMessage.includes('romance')) {
            recommendMovies(userPreferences.selectedIndustry, 'romantic');
        } else if (lowerMessage.includes('thrilled') || lowerMessage.includes('scared') || lowerMessage.includes('horror')) {
            recommendMovies(userPreferences.selectedIndustry, 'thrilled');
        } else if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
            addTypingMessage("I can recommend movies based on your mood! You can click the mood buttons or tell me how you're feeling. I can also remember your name, favorite genres, and adjust the font size and theme. Just let me know what you'd like to do!", 'bot');
        } else {
            addTypingMessage("I'm not sure about your mood. Could you please select a mood button or tell me how you're feeling?", 'bot');
        }
    } catch (error) {
        console.error('Error processing message:', error);
        addTypingMessage("I'm having trouble processing that. Could you please try again?");
    }
}

// Recommend movies based on mood
function recommendMovies(industry, mood) {
    const movies = getMovieRecommendations(industry, mood);
    
    if (movies.length === 0) {
        displayMessage("I couldn't find any movies matching your preferences. Let's try a different mood or industry!", 'bot');
        return;
    }

    // Create a container for movie recommendations
    const recommendationsContainer = document.createElement('div');
    recommendationsContainer.className = 'movie-recommendations';
    
    // Add a message about the recommendations
    displayMessage(`Here are some ${mood} movies from ${industry} that you might enjoy:`, 'bot');
    
    // Create and append movie cards
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        recommendationsContainer.appendChild(movieCard);
    });
    
    // Add the recommendations container to the chat
    chatBox.appendChild(recommendationsContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Add follow-up message
    setTimeout(() => {
        displayMessage("Would you like to see more recommendations or try a different mood?", 'bot');
    }, 1000);
}

// Create a movie card
function createMovieCard(movie) {
    try {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card fade-in';
        
        movieCard.innerHTML = `
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span class="movie-year">${movie.year}</span>
                    <span class="movie-rating">⭐ ${movie.rating}</span>
                </div>
                <p class="movie-genre">${movie.genre}</p>
                <p class="movie-description">${movie.description}</p>
                <div class="movie-actions">
                    <button class="watch-btn" onclick="addToWatchlist('${movie.title}')">
                        <i class="fas fa-plus"></i> Add to Watchlist
                    </button>
                    <button class="like-btn" onclick="likeMovie('${movie.title}')">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        
        return movieCard;
    } catch (error) {
        console.error("Error creating movie card:", error);
        return document.createElement('div'); // Return empty div as fallback
    }
}

// Add confetti effect for movie recommendations
function showConfetti() {
    try {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    } catch (error) {
        console.error("Error showing confetti:", error);
    }
}

// Add to watchlist with animation
function addToWatchlist(movieTitle) {
    if (!userPreferences.watchedMovies.includes(movieTitle)) {
        userPreferences.watchedMovies.push(movieTitle);
        saveUserPreferences();
        
        const watchBtn = document.querySelector(`[onclick="addToWatchlist('${movieTitle}')"]`);
        if (watchBtn) {
            watchBtn.innerHTML = '<i class="fas fa-check"></i> Added!';
            watchBtn.classList.add('success');
            
            // Add success animation
            const checkmark = document.createElement('div');
            checkmark.className = 'success-checkmark';
            checkmark.innerHTML = '✓';
            watchBtn.appendChild(checkmark);
            setTimeout(() => checkmark.remove(), 1000);
            
            showToast(`Added "${movieTitle}" to your watchlist!`);
        }
    }
}

// Like movie with animation
function likeMovie(movieTitle) {
    const likeBtn = document.querySelector(`[onclick="likeMovie('${movieTitle}')"]`);
    if (likeBtn) {
        const icon = likeBtn.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            likeBtn.classList.add('liked');
            
            // Create floating hearts
            for (let i = 0; i < 5; i++) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '❤️';
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.animationDelay = `${i * 0.2}s`;
                likeBtn.appendChild(heart);
                setTimeout(() => heart.remove(), 1000);
            }
            
            showToast(`Added "${movieTitle}" to your favorites!`);
        }
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add message to chat with typing animation
function addTypingMessage(message, sender = 'bot', callback = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    // Add typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    contentDiv.appendChild(typingIndicator);
    
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Simulate typing
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < message.length) {
            contentDiv.textContent = message.substring(0, i + 1);
            i++;
            chatBox.scrollTop = chatBox.scrollHeight;
        } else {
            clearInterval(typingInterval);
            if (callback) callback();
        }
    }, 30);
}

// Add message to chat without typing animation
function addMessage(message, sender) {
    try {
        if (!chatBox) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = message;
        
        messageDiv.appendChild(contentDiv);
        chatBox.appendChild(messageDiv);
        
        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        console.error("Error adding message:", error);
    }
}

// Add some initial animations
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize DOM elements
        initializeDOMElements();
        
        // Initialize user preferences
        initializeUserPreferences();
        
        // Initialize theme
        initializeTheme();
        
        // Setup event listeners
        setupEventListeners();
        
        // Start the chat flow
        initializeChat();
        
        // Add welcome animation
        if (container) {
            container.classList.add('welcome-animation');
        }
    } catch (error) {
        console.error("Error during initialization:", error);
    }
});

// Industry selection buttons HTML
const industryButtonsHTML = `
    <div class="industry-buttons">
        <button class="industry-btn" data-industry="hollywood">Hollywood</button>
        <button class="industry-btn" data-industry="bollywood">Bollywood</button>
        <button class="industry-btn" data-industry="tollywood">Tollywood</button>
    </div>
`;

// Modified initialization
function initializeChat() {
    try {
        // Add initial greeting
        addTypingMessage("Hello! I'm your movie recommendation assistant. Let me help you find the perfect movie!");
        
        // Add industry selection after a short delay
        setTimeout(() => {
            addIndustrySelection();
        }, 1500);
    } catch (error) {
        console.error('Error in initialization:', error);
    }
}

// Add industry selection to chat
function addIndustrySelection() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot-message';
    messageDiv.innerHTML = `
        <p>Which industry's movies would you like to watch?</p>
        ${industryButtonsHTML}
    `;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Add mood buttons to chat
function addMoodButtons() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot-message';
    messageDiv.innerHTML = `
        <p>How are you feeling today?</p>
        <div class="mood-buttons">
            <button class="mood-btn" data-mood="happy">Happy</button>
            <button class="mood-btn" data-mood="sad">Sad</button>
            <button class="mood-btn" data-mood="excited">Excited</button>
            <button class="mood-btn" data-mood="relaxed">Relaxed</button>
            <button class="mood-btn" data-mood="romantic">Romantic</button>
            <button class="mood-btn" data-mood="thrilled">Thrilled</button>
        </div>
    `;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Add event listeners to mood buttons
    const moodButtons = messageDiv.querySelectorAll('.mood-btn');
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.getAttribute('data-mood');
            handleMoodSelection(mood);
        });
    });
}

// Add event listeners for industry buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('industry-btn')) {
        const industry = e.target.dataset.industry;
        userPreferences.selectedIndustry = industry;
        saveUserPreferences();
        
        // Remove industry buttons
        const industryButtons = document.querySelector('.industry-buttons');
        if (industryButtons) {
            industryButtons.remove();
        }
        
        // Show mood selection
        addTypingMessage(`Great choice! I have some amazing ${industry} movies for you. How are you feeling today?`);
        setTimeout(() => {
            addMoodButtons();
        }, 1500);
    }
});

// Add color theme functionality
function initializeColorThemes() {
    const themeSelector = document.createElement('div');
    themeSelector.className = 'theme-selector';
    
    const themes = [
        { name: 'ocean', label: 'Ocean Breeze' },
        { name: 'sunset', label: 'Sunset Vibes' },
        { name: 'forest', label: 'Forest Fresh' },
        { name: 'royal', label: 'Royal Purple' },
        { name: 'midnight', label: 'Midnight Blue' }
    ];
    
    themes.forEach(theme => {
        const button = document.createElement('button');
        button.className = 'color-theme-btn';
        button.setAttribute('data-theme', theme.name);
        button.setAttribute('title', theme.label);
        button.addEventListener('click', () => setColorTheme(theme.name));
        themeSelector.appendChild(button);
    });
    
    document.body.appendChild(themeSelector);
    
    // Set saved theme or default
    const savedTheme = localStorage.getItem('colorTheme') || 'ocean';
    setColorTheme(savedTheme);
}

function setColorTheme(theme) {
    document.body.setAttribute('data-color-theme', theme);
    localStorage.setItem('colorTheme', theme);
    
    // Update active button
    const buttons = document.querySelectorAll('.color-theme-btn');
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
    
    // Add transition effect
    const container = document.querySelector('.container');
    if (container) {
        container.style.animation = 'none';
        container.offsetHeight; // Trigger reflow
        container.style.animation = 'fadeIn 0.5s ease-out';
    }
}

// Enhanced button click effects
function addRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size/2}px`;
    ripple.style.top = `${event.clientY - rect.top - size/2}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 1000);
}

// Enhanced movie recommendation function
function getMovieRecommendations(industry, mood) {
    try {
        // Check if the industry and mood exist in the database
        if (!movieDatabase[industry] || !movieDatabase[industry][mood]) {
            console.error(`No movies found for industry: ${industry} and mood: ${mood}`);
            return [];
        }
        
        // Get movies for the selected industry and mood
        const movies = movieDatabase[industry][mood];
        
        // If user has favorite genres, prioritize those
        if (userPreferences.favoriteGenres && userPreferences.favoriteGenres.length > 0) {
            // Sort movies to prioritize user's favorite genres
            return movies.sort((a, b) => {
                const aHasGenre = userPreferences.favoriteGenres.some(genre => 
                    a.genre.toLowerCase().includes(genre.toLowerCase()));
                const bHasGenre = userPreferences.favoriteGenres.some(genre => 
                    b.genre.toLowerCase().includes(genre.toLowerCase()));
                
                if (aHasGenre && !bHasGenre) return -1;
                if (!aHasGenre && bHasGenre) return 1;
                return 0;
            });
        }
        
        return movies;
    } catch (error) {
        console.error("Error getting movie recommendations:", error);
        return [];
    }
}

// Enhanced message display function with better performance
function displayMessage(message, sender) {
    try {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${sender}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        // Use textContent for better performance and security
        messageContent.textContent = message;
        
        messageElement.appendChild(messageContent);
        
        // Use requestAnimationFrame for smoother animations
        requestAnimationFrame(() => {
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        });
    } catch (error) {
        console.error("Error displaying message:", error);
    }
} 