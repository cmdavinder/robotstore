INSERT INTO authority (name) VALUES
('ROLE_ADMIN'),
('ROLE_USER');

INSERT INTO user (id, login, password_hash, first_name, last_name, email, activated, created_by, last_modified_by, created_date) VALUES
(1, 'admin','$2a$10$axvIa4wy9PqpAwrrHjSD..GNeILBEIv14T.wddtUKmRDBvnOOvVKC','admin','admin','admin@gmail.com', true,'admin','admin', now());
INSERT INTO user (id, login, password_hash, first_name, last_name, email, activated,created_by, last_modified_by, created_date) VALUES
(2, 'user','$2a$10$gU8WOZT.ioMBvUiKh7Qx1.rTAmooXSHGifZphKtAZSjfzQbwyl34S','user','user','user@gmail.com', true, 'admin','admin', now());


INSERT INTO user_authority (user_id, authority_name) VALUES
(1,'ROLE_ADMIN');
INSERT INTO user_authority (user_id, authority_name) VALUES
(1,'ROLE_USER');
INSERT INTO user_authority (user_id, authority_name) VALUES
(2,'ROLE_USER');

INSERT INTO robot (id, name, description, price, sold_out) VALUES
(1, 'OWI-535 Robotic Arm Edge','The OWI-535 Robotic Arm Edge rides the wings of the award winning OWI Arm Trainer Robot Kit. OWI has made robotic arm technology more affordable without compromising quality',44.90, false);
INSERT INTO robot (id, name, description, price, sold_out) VALUES
(2, 'Ozobot Bit 2.0 Interactive Robot Dual Set','Problem solving and group challenges by coloring code commands in the form of basic color combinations',92.99, true);
INSERT INTO robot (id, name, description, price, sold_out) VALUES
(3, 'Ollie Bluetooth App-controlled Robot','The Ollie Bluetooth App-Controlled Robot is engineered for speed, programmed for tricks, and customized by you. Ollie rolls at speeds of up to 14 mph and connects instantly to your device via Bluetooth LE with a range of up to 100 feet.',99.00, false);
INSERT INTO robot (id, name, description, price, sold_out) VALUES
(4, 'Hasbro Silver & White Cat Interactive Companion','The Hasbro Silver & White Cat Interactive Companion look, feel and sound like real cats. But they''re so much more than soft fur, soothing purrs and pleasant meows. These cats respond to petting, hugging and motion much like the real ones you know and love but don''t require any special care or feeding.',95.99, true);
INSERT INTO robot (id, name, description, price, sold_out) VALUES
(5, 'Hatchimals Draggles Purple','The Hatchimals Pengualas Teal is magical creatures that live inside of eggs. Who''s inside? It''s a surprise! Each egg contains one of two interactive Hatchimals. Love and care for yours inside the egg and its eyes will light up as it makes cute sounds, telling you how it''s feeling!',64.99, true);
INSERT INTO robot (id, name, description, price, sold_out) VALUES
(6, 'WowWee MiP Robotic Companion (Black)','The MiP Robotic Companion (Black) is a multifunctional and autonomous robot equipped with GestureSense technology. Using its free app, you can drive it, play games & more all while MiP balances on two wheels. Perched atop unique dual wheels, powered by an iOS or Android smartphone, your eyes will light up at what MiP can do, this is more than just a toy.',68.99, false);
INSERT INTO robot (id, name, description, price, sold_out) VALUES
(7, 'Hasbro Golden Pup Interactive Robot Toy Dog','The Hasbro Golden Pup Interactive Robot Toy Dog has all the love in the world to give but it won''t chew up your slipper! In between naps and being adorable real puppies require a lot of special attention. Thanks to built-in sensors and speakers the pup can recreate some of the more delightful moments of owning a dog including being a best friend for aging loved ones.',150.00, false);
INSERT INTO robot (id, name, description, price, sold_out) VALUES
(8, 'Launcher for Wonder Workshop Dash Robot','The Launcher for Wonder Workshop Dash Robot. This fun accessory transforms Dash from a real robot into a projectile-launching machine. Because it uses Dash to power the launcher, kids can learn how simple machines like a lever can work in a fun way.',29.99, false);
INSERT INTO robot (id, name, description, price, sold_out) VALUES
(9, 'Sphero Star Wars Force Band Force Band for BB-8','The Sphero Star Wars Force Band Force Band for BB-8 allows you to go deeper into the Star Wars galaxy. Learn how to master gesture driving with a brand new adventure, view your collection of Holocrons found in Force Awareness mode, and explore more ways to play.',79.99, false);
INSERT INTO robot (id, name, description, price, sold_out) VALUES
(10, 'WowWee Chip Robot Dog','The WowWee Chip Robot Dog is an intelligent, affectionate robot dog. With advanced sensors and smart accessories, CHiP is always aware, and ready to play. How you respond uniquely shapes his behavior, so there''s no CHiP like your CHiP.',179.99, false);
