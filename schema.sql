DROP TABLE IF EXISTS Artists;
DROP TABLE IF EXISTS Signups;

CREATE TABLE IF NOT EXISTS Artists (ArtistID INTEGER PRIMARY KEY,
                                    ArtistName TEXT,
                                    ArtistDescription TEXT,
                                    ArtistLogoURL TEXT,
                                    ArtistPageviews INTEGER);

CREATE TABLE IF NOT EXISTS Signups (ArtistID INTEGER PRIMARY KEY,
                                    CustomerEmail TEXT);

INSERT INTO Artists (ArtistID,
                     ArtistName,
                     ArtistDescription,
                     ArtistLogoURL,
                     ArtistPageviews)
             VALUES (1,
                     'Sonic Mirage',
                     'Sonic Mirage captivates audiences with ethereal melodies and hypnotic rhythms, blending genres seamlessly. Their music, a cosmic fusion of dreamy synth waves and dynamic beats, creates an immersive sonic journey.',
                     'https://i.ytimg.com/vi/1yMwfWDG294/maxresdefault.jpg',
                     10);
                
INSERT INTO Signups (ArtistID,
                     CustomerEmail)
            VALUES (1,
                    "newcustomer@email.com")