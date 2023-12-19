# Waste Segregation IoT System

_[Video Implementation](https://drive.google.com/file/d/1GYfXPkyOsKzibvq_-mAHJ4DsV7b_InyA/view?usp=sharing)_

<td><img src="https://github.com/adityashah841/Hackanova_Sleep-Deprived/assets/80106093/8f63946e-2412-409e-b755-cad584f5b770" alt="Image 3" width="350" align='right'></td>

### This project is a smart bin automated and intelligent IoT device integrated with a Machine Learning model and a React Native application which enables smart solid waste segregation and management in urban households. It has 3 compartments to separate the waste and can direct the garbage into its respective category automatically. In this problem statement we have taken solid waste and classified it into 3 categories namely:

- Compostable (_Class 1_)
- Recyclable (_Class 2_)
- Plastic (_Class 3_)
- Unclassified (_Class 4_)

## 1. Python

---

Using the camera webcam, the python file loads the [keras_model.h5](<(https://github.com/adityashah841/Hackanova_Sleep-Deprived/blob/main/model/keras_model.h5)>). It then takes the average prediction of 10 consecutive frames and then sends the predicted class to the arduino via the serialModule.

```python
import cv2
import numpy as np
from numba import jit, cuda
from keras.models import load_model
from cvzone.SerialModule import SerialObject
import serial
@jit(target_backend='cuda')
def func():
    arduino = SerialObject()
    model = load_model('keras_model.h5')
    camera = cv2.VideoCapture(0)
    arr=[]
    while True:
        ret, image = camera.read()
        image = cv2.resize(image, (224, 224), interpolation=cv2.INTER_AREA)
        cv2.imshow('Webcam Image', image)
        image = np.asarray(image, dtype=np.float32).reshape(1, 224, 224, 3)
        image = (image / 127.5) - 1
        probabilities = model.predict(image)
        arr.append(np.argmax(probabilities))
        if len(arr)==10:
            print(int(np.mean(arr)))
            arduino.sendData([int(np.mean(arr))])
            arr=[]
        keyboard_input = cv2.waitKey(1)
        if keyboard_input == 27:
            break
    camera.release()
    cv2.destroyAllWindows()

if __name__=="__main__":
    func()
```

## 2. Arduino

---

We have implimented a touchless mechanism that uses an UltraSonic Sensor to calculate the distance and check wether user is approaching with garbage or not.
After which, the Arduino receives the classification by `SerialData` and performs servo movements accordingly. The servo rotates the funnel to allign the hollow section , above that specific category, waits for user to throw the garbage, and then rotates back to original position.

```ino

#include <Servo.h>
#include <cvzone.h>
const int trigPin = 2;
const int echoPin = 3;
// defines variables
long duration;
int distance;

Servo myservo;  // create servo object to control a servo
SerialData serialData(1,1); //(numOfValsRec,digitsPerValRec)
int output[1];
int pos = 0;    // variable to store the servo position

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
      if(output[0]==1 || output[0]==2 || output[0]==3){
        myservo.write(0);
        delay(676*output[0]);
        myservo.write(90);
        delay(3000);
        myservo.write(180);
        delay(676*output[0]);
        myservo.write(90);
        delay(1000);
        Serial.println(String(output[0]));
        Serial.flush();
        }
    else{
      myservo.write(90);
      delay(500);
    }
  }

  return(0);
}
```

## 3. React Native

---

The app interface was created in ReactNative to provide an intuitive visual format for the user's statistics at different time frames. It dislays the **%waste deposited** by user on a daily/monthly/yearly basis.
The app also highlights the community features of using the app in a housing society, in which every user's personal statistics are tracked but also the community's collective **waste%** is used to asses the ecosystem of the housing society throughout the year.
