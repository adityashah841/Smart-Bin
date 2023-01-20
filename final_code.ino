#include <Servo.h>
#include <cvzone.h>
// defines pins numbers
const int trigPin = 2;
const int echoPin = 3;
// defines variables
long duration;
int distance;

Servo myservo;  // create servo object to control a servo
SerialData serialData(1,1); //(numOfValsRec,digitsPerValRec)
int output[1];
int pos = 0;    // variable to store the servo position
int flag = 0; //flag to stop rotation of funnel after classification

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  serialData.begin(); 
  pinMode(13,OUTPUT);
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
  Serial.begin(9600); // Starts the serial communication
}

void loop() {
  // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance = duration * 0.034 / 2;
  // Prints the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.println(distance);

  serialData.Get(output);
  digitalWrite(13,output[0]);  

  if(distance<10){
    if(output[0]==1 || output[0]==2 || output[0]==3 ){
      myservo.write(0);
      delay(570*(output[0]-1));
      myservo.write(90);
      delay(3000);
      myservo.write(180);
      delay(570*(output[0]-1));
    }
  }

/*  if ( output[1] != 0 ){  //classified as waste
    flag = 1;             //set flag 1
  }
  else{
    flag = 0;           // else flag 0
  }
  if (flag == 1){
    myservo.write(0);  
    delay(570*(output[1]-1));     //rotate CW to desired waste section
    myservo.write(90);
    delay(15000);
    myservo.write(180);
    delay(570*(output[1]-1));     //rotate CCW back to original
    flag = 0;
  }
  else{
    myservo.write(90);
    delay(500);  
  }
  */
  return(0); 
}
