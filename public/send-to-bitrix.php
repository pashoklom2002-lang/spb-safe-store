<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data || !isset($data['name']) || !isset($data['phone'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

$scriptUrl = 'https://script.google.com/macros/s/AKfycbytxMAJcHB3zJ0f8-3xVHX7i-zTsJDr02bp7ER57f8AuePKo1iwN1rf75i4WNSPP5OqIQ/exec';

$ch = curl_init($scriptUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'name'  => $data['name'],
    'phone' => $data['phone']
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Script error', 'details' => $response]);
}
?>