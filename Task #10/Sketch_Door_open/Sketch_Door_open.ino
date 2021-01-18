// Load libraries
#include "BluetoothSerial.h"


// Check if Bluetooth configs are enabled
#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

// Bluetooth Serial object
BluetoothSerial SerialBT;


// Handle received and sent messages
String message = "";
char incomingChar;


// Timer: auxiliar variables
unsigned long previousMillis = 0; // Stores last time temperature was published
const long interval = 10000; // interval at which to publish sensor readings

void setup() {
Serial.begin(115200);
// Bluetooth device name
SerialBT.begin("ESP32");
Serial.println("The device started, now you can pair it with bluetooth!");
}

void loop() {
// Read received messages (LED control command)
if(SerialBT.available()){
char incomingChar = SerialBT.read();
if (incomingChar != '\n'){
message += String(incomingChar);
}
else{
message = "";
}
}
Serial.write(incomingChar); 

// Check received message and control output accordingly
if(message =="Alohomora"){
delay(1000);
if(touchRead(4)<=10){
Serial.println("open");
}
}
}
