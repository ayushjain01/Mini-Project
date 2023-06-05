import tensorflow_datasets as tfds
import tensorflow as tf

# Load the English-French translation dataset
data, info = tfds.load('ted_hrlr_translate/pt_to_en', with_info=True)

# Get the encoder and decoder for English and French
encoder_en = info.features['en'].encoder
encoder_fr = info.features['pt'].encoder
decoder_en = info.features['en'].vocabulary
decoder_fr = info.features['pt'].vocabulary

# Define the model
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(encoder_en.vocab_size, 64),
    tf.keras.layers.LSTM(64),
    tf.keras.layers.RepeatVector(encoder_fr.vocab_size),
    tf.keras.layers.LSTM(64, return_sequences=True),
    tf.keras.layers.Dense(encoder_fr.vocab_size, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')

# Train the model
train_examples = data['train'].batch(64)
val_examples = data['validation'].batch(64)
model.fit(train_examples, epochs=10, validation_data=val_examples)

# Translate a sentence from English to French
sentence = 'Hello, how are you?'
sentence_encoded = encoder_en.encode(sentence)
sentence_decoded = decoder_en.decode(sentence_encoded)
prediction = model.predict(tf.constant([sentence_encoded]))
prediction_decoded = decoder_fr.decode(tf.argmax(prediction, axis=-1)[0])
print('Original sentence:', sentence)
print('Encoded sentence:', sentence_encoded)
print('Decoded sentence:', sentence_decoded)
print('Translated sentence:', prediction_decoded)
