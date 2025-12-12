/**
 * API Route: File Download Handler
 * Author: AR
 * Created: 2025-12-11
 * Description: Serves files from /public/assets with proper Content-Disposition headers for download
 */

import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

// MIME type mapping
const mimeTypes: Record<string, string> = {
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
  '.mov': 'video/quicktime',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.zip': 'application/zip',
};

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = params.path.join('/');
    const fullPath = path.join(process.cwd(), 'public', 'assets', filePath);
    
    // Security: Ensure path doesn't escape assets directory
    const normalizedPath = path.normalize(fullPath);
    const assetsDir = path.join(process.cwd(), 'public', 'assets');
    
    if (!normalizedPath.startsWith(assetsDir)) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }
    
    // Read the file
    const fileBuffer = await readFile(normalizedPath);
    
    // Get filename and extension
    const filename = path.basename(filePath);
    const ext = path.extname(filename).toLowerCase();
    const mimeType = mimeTypes[ext] || 'application/octet-stream';
    
    // Return file with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': mimeType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}

