DROP TABLE IF EXISTS Artists;
CREATE TABLE IF NOT EXISTS Artists (ArtistID INTEGER PRIMARY KEY, ArtistName TEXT, ArtistDescription TEXT, ArtistLogoURL TEXT);
INSERT INTO Artists (ArtistID, ArtistName, ArtistDescription, ArtistLogoURL) VALUES (1, 'Sonic Mirage', 'Sonic Mirage captivates audiences with ethereal melodies and hypnotic rhythms, blending genres seamlessly. Their music, a cosmic fusion of dreamy synth waves and dynamic beats, creates an immersive sonic journey.', 'https://i.ytimg.com/vi/1yMwfWDG294/maxresdefault.jpg');