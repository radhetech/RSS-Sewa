
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-pravas-list',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './pravas-list.component.html',
  styleUrl: './pravas-list.component.scss'
})
export class PravasListComponent implements OnInit{
  pravasiList:any = [
    { name: "मा. डॉ. भरतभाई अंबालाल पटेल", responsibility: "मा. प्रांत संघ चालक", jilla: "गांधीनगर" },
    { name: "श्री शैलेषभाई शंकरलाल पटेल", responsibility: "प्रांत कार्यवाह", jilla: "मेमनगर" },
    { name: "डॉ. सुनीलभाई मणिलाल बोरीसा", responsibility: "प्रांत सह कार्यवाह", jilla: "साबरमती" },
    { name: "श्री डॉ. अखिलेश जी राजबली पांडे", responsibility: "प्रांत सह कार्यवाह", jilla: "नवसारी" },
    { name: "श्री निमेषभाई रणछोडभाई पटेल", responsibility: "प्रांत प्रचारक", jilla: "चांदलोडिया" },
    { name: "श्री कृणालभाई भवानभाई रूपापरा", responsibility: "प्रांत सह प्रचारक", jilla: "वलसाड" },
    { name: "श्री मेहुलभाई हरिभाई वाळंद", responsibility: "प्रांत शारीरिक शिक्षण प्रमुख", jilla: "भरूच" },
    { name: "श्री हरेशभाई कनैयालाल पंचाल", responsibility: "प्रांत सह शारीरिक शिक्षण प्रमुख", jilla: "राधनपुर" },
    { name: "श्री कैलाशभाई प्रतापभाई त्रिवेदी", responsibility: "प्रांत बौद्धिक शिक्षण प्रमुख", jilla: "ड़ीसा" },
    { name: "श्री नीरवभाई इन्द्रवदनभाई पटेल", responsibility: "प्रांत सह बौद्धिक शिक्षण प्रमुख", jilla: "अंकलेश्वर" },
    { name: "श्री भीखुभाई त्रिभोवनदास सुथार", responsibility: "प्रांत व्यवस्था प्रमुख", jilla: "नरोड़ा" },
    { name: "श्री निलेषभाई छोटालाल भावसार", responsibility: "प्रांत सह व्यवस्था प्रमुख", jilla: "छो. उदेपुर" },
    { name: "श्री महेशभाई नरोत्तमदास चौहाण", responsibility: "प्रांत महाविधालय प्रमुख", jilla: "अमराईवाड़ी" },
    { name: "श्री जगदीशभाई भलाभाई चावडा", responsibility: "प्रांत सेवा शिक्षण प्रमुख", jilla: "थराद" },
    { name: "श्री अश्विनभाई जयंतिलाल कडेचा", responsibility: "प्रांत सह सेवा शिक्षण प्रमुख", jilla: "दाहोद" },
    { name: "श्री मनसुखभाई लालजीभाई पटेल", responsibility: "प्रांत सह सेवा शिक्षण प्रमुख", jilla: "डांग" },
    { name: "श्री प्रकाशभाई विनोदभाई पटेल", responsibility: "प्रांत संपर्क प्रमुख", jilla: "गांधीनगर" },
    { name: "श्री नंदकिशोरजी लक्ष्मीनारायण शर्मा", responsibility: "प्रांत सह संपर्क प्रमुख", jilla: "शिवाजी" },
    { name: "श्री विजयभाई जेठालाल ठाकर", responsibility: "प्रांत प्रचार प्रमुख", jilla: "मेमनगर" },
    { name: "श्री जयमीनभाई गज्जर", responsibility: "प्रांत सह प्रचार प्रमुख", jilla: "वडोदरा(म.न.)" },
    { name: "श्री तेजसभाई सुरेशभाई पटेल", responsibility: "प्रांत सह प्रचार प्रमुख", jilla: "पालड़ी" },
    { name: "श्री सज्जनभाई ओझा", responsibility: "(सदस्य) प्रांत प्रौढ़ प्रमुख", jilla: "विसनगर" },
    { name: "श्री धर्मेशभाई चन्द्रकान्त महेता", responsibility: "(सदस्य) धर्म जागरण समन्वय संयोजक", jilla: "दाहोद" },
    { name: "श्री नरेश (गोपालभाई) हरिलाल शाह", responsibility: "(सदस्य) धर्म जागरण समन्वय सह संयोजक", jilla: "बापुनगर" },
    { name: "डॉ. हेमांगभाई रमेशचंद्र पुरोहित", responsibility: "(सदस्य) सामाजिक समरसता संयोजक", jilla: "मणिनगर" },
    { name: "श्री योगेशभाई पारेख", responsibility: "(सदस्य) सामाजिक समरसता सह संयोजक", jilla: "सूरत ( ग्रा )" },
    { name: "श्री तुषारभाई जादवभाई मिस्त्री", responsibility: "(सदस्य) कुटुंब प्रबोधन संयोजक", jilla: "चांदलोडिया" },
    { name: "श्री परिमलभाई भानुप्रसाद पंडित", responsibility: "(सदस्य) कुटुंब प्रबोधन सह संयोजक", jilla: "साबरमती" },
    { name: "श्री परेशभाई मनुप्रसाद व्यास", responsibility: "(सदस्य) ग्राम विकास संयोजक", jilla: "पाटण" },
    { name: "श्री कल्पेशभाई रतिलाल पटेल", responsibility: "(सदस्य) ग्राम विकास सह संयोजक", jilla: "नर्मदा" },
    { name: "श्री नितिनभाई देवराजभाई हिराणी", responsibility: "(सदस्य) गौ सेवा संयोजक", jilla: "आणंद" },
    { name: "श्री गौतमभाई मणिलाल बोरीसा", responsibility: "(सदस्य) गौ सेवा सह संयोजक", jilla: "साबरमती" },
    { name: "श्री हितेंद्रभाई विठलदास मोजिद्रा", responsibility: "(सदस्य) पर्यावरण संरक्षण संयोजक", jilla: "चांदलोडिया" },
    { name: "श्री निलेषभाई सोलंकी", responsibility: "(सदस्य) पर्यावरण संरक्षण सह संयोजक", jilla: "आणंद" },
    { name: "श्री अशोकभाई सवजीभाई पटेल", responsibility: "(सदस्य) मुख्य मार्ग कार्य", jilla: "मणिनगर" },
    { name: "श्री घनश्यामभाई नानजीभाई सीतापरा", responsibility: "(सदस्य) सामाजिक सद्भाव", jilla: "बोपल" },
    { name: "श्री महेशभाई रामभाई परीख", responsibility: "(सदस्य) महिला समन्वय", jilla: "पालड़ी" },
    { name: "श्री भानुभाई नरोत्तमभाई चौहाण", responsibility: "(सदस्य)", jilla: "बोपल" },
    { name: "श्री राजेशभाई हरीभाई तुलस्यान", responsibility: "(सदस्य) प्रांत कार्यालय प्रमुख", jilla: "असारवा" },
    { name: "श्री नटुभाई बाबूभाई जोशी", responsibility: "(सदस्य) मुख्य मार्ग संयोजक", jilla: "पालनपुर" },
    { name: "श्री जशुभाई मानसंगभाई चौधरी", responsibility: "(सदस्य) join rss संयोजक", jilla: "महेसाणा" },
    { name: "श्री दत्ताराम सीताराम साळुंके", responsibility: "(सदस्य) वानप्रस्थि कार्य", jilla: "वडोदरा (म.न.)" },
    { name: "श्री प्रकाशभाई मिस्त्री", responsibility: "(सदस्य) सह वानप्रस्थि कार्य", jilla: "महिसागर" },
    { name: "श्री महेन्द्रभाई अंबालाल पटेल", responsibility: "(सदस्य) जल कार्य", jilla: "अरवल्ली" },
    { name: "श्री बळदेवभाई गोविदभाई प्रजापति", responsibility: "(सदस्य) सामाजिक सद्भाव कार्य", jilla: "भरूच" },
    { name: "श्री भाईलालभाई नरसिंहभाई पटेल", responsibility: "(सदस्य) धुमंत कार्य", jilla: "वडोदरा ( ग्रा )" },
    { name: "श्री केशवभाई आणेराव", responsibility: "(सदस्य) आध्यापक कार्य", jilla: "वडोदरा(म.न.)" },
    { name: "श्री हार्दिकभाई योगेशभाई परीख", responsibility: "(सदस्य)", jilla: "वटवा" },
    { name: "श्री सुरेशभाई लिंबड", responsibility: "(सदस्य) संघ मंडली कार्य", jilla: "तापी" },
    { name: "श्री प्रणवभाई विष्णुभाई पटेल", responsibility: "(सदस्य) घोष कार्य", jilla: "बापुनगर" },
    { name: "श्री परिमलभाई दिनेशचंद्र पाठक", responsibility: "(निमंत्रित सदस्य)", jilla: "पंचमहाल" },
    { name: "श्री घनश्यामभाई चंदूलाल व्यास", responsibility: "(निमंत्रित सदस्य) HSS", jilla: "नारणपूरा" },
    { name: "श्री अशोकजी मंडल", responsibility: "(निमंत्रित सदस्य) विशेष संस्थान", jilla: "नारणपुरा" },
    { name: "श्री डॉ. कौशलभाई पटेल", responsibility: "(निमंत्रित सदस्य) मेडिकल कार्य", jilla: "भरूच" },
    { name: "श्री निखिलभाई लालशंकर उपाध्याय", responsibility: "(निमंत्रित सदस्य) IT कार्य", jilla: "बोपल" },
    { name: "श्री निरवभाई रावल", responsibility: "(निमंत्रित सदस्य) अभिलेखागार", jilla: "बोपल" }
  ];
  
  
  constructor(){}
   ngOnInit(): void {   
   }
}
