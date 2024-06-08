-- Create the User table
CREATE TABLE "User" (
  UserID SERIAL PRIMARY KEY,
  Name VARCHAR(255),
  Email VARCHAR(255) UNIQUE,
  PhoneNum VARCHAR(20),
  UserType VARCHAR(50),
  ProfilePicture VARCHAR(255)
);

CREATE TABLE UserOAuthCredentials (
  UserID INT PRIMARY KEY REFERENCES "User"(UserID),
  OAuthID VARCHAR(255) UNIQUE,
  OAuthProvider VARCHAR(50)
);

CREATE TABLE UserCredentials (
  UserID INT PRIMARY KEY REFERENCES "User"(UserID),
  PasswordHash VARCHAR(255)
);

-- Create the FieldProvider table
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

-- Create the Field table
CREATE TABLE Field (
  FieldID INT PRIMARY KEY,
  FieldName VARCHAR(255),
  Location VARCHAR(255),
  PricePerHour DECIMAL(10, 2),
  ProviderID INT,
  FOREIGN KEY (ProviderID) REFERENCES FieldProvider(ProviderID)
);

-- Create the Tournament table
CREATE TABLE Tournament (
  TournamentID INT PRIMARY KEY,
  TournamentName VARCHAR(255),
  Location VARCHAR(255),
  StartDate DATE,
  EndDate DATE,
  Description TEXT
);

-- Create the Coach table
CREATE TABLE Coach (
  CoachID INT PRIMARY KEY,
  UserID INT,
  Bio TEXT,
  Expertise TEXT,
  PricePerHour DECIMAL(10, 2),
  FOREIGN KEY (UserID) REFERENCES "User"(UserID)
);

-- Create the CoachOrder table
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

-- Create the Booking table
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

-- Create the Transaction table
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