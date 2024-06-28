const fs = require('fs');
const path = require('path');
import { ReporterDescription} from '@playwright/test';
class ReportsGenerator {

    static async generateReport(reporter: ReporterDescription) {
        const reportPath = path.join(__dirname, '../output', 'report.json');
        const report = JSON.stringify(reporter, null, 2);
        fs.writeFileSync(reportPath, report);
    }
}