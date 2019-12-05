package com.client;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import com.aevi.print.PrinterApi;
import com.aevi.print.PrinterManager;
import com.aevi.print.model.PrintJob;
import com.aevi.print.model.PrintPayload;
import com.aevi.print.model.PrinterSettings;
import com.aevi.print.model.PrinterSettingsList;
import com.aevi.print.model.PrinterStatus;

import io.reactivex.annotations.NonNull;
import io.reactivex.disposables.Disposable;
import io.reactivex.functions.Consumer;
import io.reactivex.schedulers.Schedulers;
import io.reactivex.Observable;

import android.util.Log;
import android.util.SparseArray;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import android.print.PrinterId;
import android.print.PrinterInfo;
import android.print.PrintManager;

import com.aevi.print.model.Alignment;
import com.aevi.print.model.FontStyle;
import com.aevi.print.model.PrintPayload;
import com.aevi.print.model.PrinterFont;
import com.aevi.print.model.PrinterSettings;
import com.aevi.print.model.Underline;

import java.util.Map;
import java.util.HashMap;

public class PrintModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";
    
    private PrinterManager printerManager;
    private PrinterSettings selectedPrinter;
    //private PrintPayload printPayload;

    PrintModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    private static final String TAG = PrintModule.class.getSimpleName();
    
    @Override
    public String getName() {
        return "PrintModule";

    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void PrintSomething() {
        Toast.makeText(getReactApplicationContext(), "Test", Toast.LENGTH_SHORT).show();

        PrintPayload printPayload = new PrintPayload();
        printPayload.append("Align Left");
        printPayload.append("Align Right").align(Alignment.RIGHT);
        printPayload.append("Align Center").align(Alignment.CENTER);
        printPayload.append("Emphasized").fontStyle(FontStyle.EMPHASIZED);
        printPayload.append("Inverted").fontStyle(FontStyle.INVERTED);
        printPayload.appendEmptyLine();
        printPayload.append("InvertedEmphasized").fontStyle(FontStyle.INVERTED_EMPHASIZED);
        printPayload.append("Single Underlined").underline(Underline.SINGLE);
        printPayload.append("Double Underlined").underline(Underline.DOUBLE);
        printPayload.appendEmptyLine();
        // append a basket 20 columns wide
        // printPayload.appendLeftRight(20, "Name", "Description");
        // printPayload.appendLeftRight(20, "Item One", "Description 1");
        // printPayload.appendLeftRight(20, "Item Two", "Description 2");
        // printPayload.appendEmptyLine();

        printerManager = PrinterApi.getPrinterManager(getReactApplicationContext());
        if (printerManager.isPrinterServiceAvailable()) {
            Toast.makeText(getReactApplicationContext(), "Test Worked", Toast.LENGTH_LONG).show();

            printerManager.print(printPayload)
            .subscribeOn(Schedulers.newThread())
            .subscribe(new Consumer<PrintJob>() {
                @Override
                public void accept(@NonNull PrintJob printResult) throws Exception {
                    Log.d(TAG, "Got printing result:: " + printResult.getPrintJobState());
                }
            }, new Consumer<Throwable>() {
                @Override
                public void accept(@NonNull Throwable throwable) throws Exception {
                    Log.e(TAG, "Error while printing", throwable);
                }
            });
        } else {
            Toast.makeText(getReactApplicationContext(), "No Service Installed", Toast.LENGTH_LONG).show();
        }

    }
}