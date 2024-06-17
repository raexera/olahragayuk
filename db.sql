-- Create the User table (unchanged)
CREATE TABLE "User" (
  UserID SERIAL PRIMARY KEY,
  Name VARCHAR(255),
  Email VARCHAR(255) UNIQUE,
  PhoneNum VARCHAR(20),
  UserType VARCHAR(50),
  ProfilePicture VARCHAR(255)
);

-- Create the UserOAuthCredentials table (unchanged)
CREATE TABLE UserOAuthCredentials (
  UserID INT PRIMARY KEY REFERENCES "User"(UserID),
  OAuthID VARCHAR(255) UNIQUE,
  OAuthProvider VARCHAR(50)
);

-- Create the UserCredentials table (unchanged)
CREATE TABLE UserCredentials (
  UserID INT PRIMARY KEY REFERENCES "User"(UserID),
  PasswordHash VARCHAR(255)
);

-- Create the FieldProvider table (unchanged)
CREATE TABLE FieldProvider (
  ProviderID INT PRIMARY KEY,
  UserID INT,
  CompanyName VARCHAR(255),
  Address VARCHAR(255),
  Phone VARCHAR(20),
  Email VARCHAR(255),
  Description TEXT,
  FOREIGN KEY (UserID) REFERENCES "User"(UserID)
);

-- Create the Field table with CityID and SportID
CREATE TABLE Field (
  FieldID INT PRIMARY KEY,
  FieldName VARCHAR(255),
  Location VARCHAR(255),
  PricePerHour DECIMAL(10, 2),
  ProviderID INT,
  CityID INT,
  SportID INT,
  FOREIGN KEY (ProviderID) REFERENCES FieldProvider(ProviderID),
  FOREIGN KEY (CityID) REFERENCES City(CityID),
  FOREIGN KEY (SportID) REFERENCES Sport(SportID)
);

-- Create the Tournament table with CityID and SportID
CREATE TABLE Tournament (
  TournamentID INT PRIMARY KEY,
  TournamentName VARCHAR(255),
  Location VARCHAR(255),
  StartDate DATE,
  EndDate DATE,
  Description TEXT,
  CityID INT,
  SportID INT,
  FOREIGN KEY (CityID) REFERENCES City(CityID),
  FOREIGN KEY (SportID) REFERENCES Sport(SportID)
);

-- Create the Coach table with CityID and SportID
CREATE TABLE Coach (
  CoachID INT PRIMARY KEY,
  UserID INT,
  Bio TEXT,
  Expertise TEXT,
  PricePerHour DECIMAL(10, 2),
  CityID INT,
  SportID INT,
  FOREIGN KEY (UserID) REFERENCES "User"(UserID),
  FOREIGN KEY (CityID) REFERENCES City(CityID),
  FOREIGN KEY (SportID) REFERENCES Sport(SportID)
);

-- Create the CoachOrder table (unchanged)
CREATE TABLE CoachOrder (
  OrderID INT PRIMARY KEY,
  UserID INT,
  CoachID INT,
  OrderDate DATE,
  SessionDate DATE,
  StartTime TIME,
  EndTime TIME,
  FOREIGN KEY (UserID) REFERENCES "User"(UserID),
  FOREIGN KEY (CoachID) REFERENCES Coach(CoachID)
);

-- Create the Booking table (unchanged)
CREATE TABLE Booking (
  BookingID INT PRIMARY KEY,
  UserID INT,
  FieldID INT,
  BookingDate DATE,
  StartTime TIME,
  EndTime TIME,
  FOREIGN KEY (UserID) REFERENCES "User"(UserID),
  FOREIGN KEY (FieldID) REFERENCES Field(FieldID)
);

-- Create the Transaction table (unchanged)
CREATE TABLE "Transaction" (
  TransactionID INT PRIMARY KEY,
  UserID INT,
  BookingID INT,
  OrderID INT,
  Amount DECIMAL(10, 2),
  TransactionDate DATE,
  PaymentMethod VARCHAR(50),
  Status VARCHAR(50),
  FOREIGN KEY (UserID) REFERENCES "User"(UserID),
  FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
  FOREIGN KEY (OrderID) REFERENCES CoachOrder(OrderID)
);

-- Create the City table
CREATE TABLE City (
  CityID INT PRIMARY KEY,
  CityName VARCHAR(255)
);

-- Create the Sport table
CREATE TABLE Sport (
  SportID INT PRIMARY KEY,
  SportName VARCHAR(255)
);