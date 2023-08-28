const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const port = 3000;

const dbPath = path.join(__dirname, 'history.db');
const db = new sqlite3.Database(dbPath);

db.run(`
  CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    answer TEXT NOT NULL
  )
`);

app.use(express.json());

function calculateExpression(expression) {
    try {
        return eval(expression).toString();
    } catch {
        return "Invalid expression";
    }
}

app.get('/:expression', (req, res) => {
    const expression = req.params.expression;

    const mathExpression = expression.replace('plus', '+').replace('minus', '-').replace('into', '*').replace('dividedby', '/');

    const result = calculateExpression(mathExpression);

    db.run('INSERT INTO history (question, answer) VALUES (?, ?)', [mathExpression, result], (err) => {
        if (err) {
            console.error(err);
        }
    });

    db.run(`
        DELETE FROM history 
        WHERE id = (SELECT id FROM history ORDER BY id ASC LIMIT 1)
        AND (SELECT COUNT(*) FROM history) > 20
    `);

    res.json({ question: mathExpression, answer: result });
});

app.get('/history', (req, res) => {
    db.all('SELECT question, answer FROM history ORDER BY id DESC LIMIT 20', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const history = rows.map(row => ({ question: row.question, answer: row.answer }));
        res.json(history);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});