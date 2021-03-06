<?php
namespace Att\Api\Util;

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 */

/**
 * Utility functions 
 * 
 * PHP version 5.4+
 * 
 * LICENSE: Licensed by AT&T under the 'Software Development Kit Tools 
 * Agreement.' 2013. 
 * TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTIONS:
 * http://developer.att.com/sdk_agreement/
 *
 * Copyright 2013 AT&T Intellectual Property. All rights reserved.
 * For more information contact developer.support@att.com
 * 
 * @category  Utility
 * @package   Util
 * @author    pk9069
 * @copyright 2013 AT&T Intellectual Property
 * @license   http://developer.att.com/sdk_agreement AT&amp;T License
 * @link      http://developer.att.com
 */

use finfo;
use InvalidArgumentException;

/**
 * Utility class with static helper methods.
 * 
 * @category Utility
 * @package  Util
 * @author   pk9069
 * @license  http://developer.att.com/sdk_agreement AT&amp;T License
 * @link     http://developer.att.com
 */
final class Util
{
    /**
     * Used to generate file MIME types.
     */
    private static $_fileInfo = null;

    /**
     * Disallow instances.
     */
    private function __construct() 
    {
        /* empty */
    }

    /**
     * Gets the server's current time. NOTE: For accurate results, the 
     * 'date.timezone' configuration setting should be set to the server's
     * time zone.
     *
     * @link http://php.net/manual/en/datetime.configuration.php
     * @return string current server's time
     */
    public static function getServerTime() 
    {
        if (!ini_get('date.timezone'))
            date_default_timezone_set('UTC');

        return date('D, F j, Y G:i:s T'); 
    }

    /**
     * Gets a file's MIME type. 
     *
     * @param string $fname file name for which to get MIME type
     *
     * @return void
     */
    public static function getFileMIMEType($fname) 
    {
        // TODO: Move to file util

        // Try getMimeType2 first, if unknown go to finfo
		$ftype = Util::getMimeType2($fname);
		if ($ftype != 'unknown') return $ftype;
		
		// lazy init
        if (self::$_fileInfo == null) {
            self::$_fileInfo = new finfo(FILEINFO_MIME);
        }

        return self::$_fileInfo->file($fname);
    }
    
	/** 
     * Returns the mime type associated with the specified input file based on the system's mime type file.
     *
     * @method  getMimeType2 was added on 2/12/2014 because getFileMIMEType does not work for amr and amb files.
     *
     * @param   {string} filename Name of input file
     *
     * @return  {string} The mime type of the file, based on the extension in the name.
     */
    public static function getMimeType2($filename) {

        $extension = pathinfo($filename, PATHINFO_EXTENSION);
        switch ($extension) {
            case 'amr': return 'audio/amr';
            case 'awb': return 'audio/amr-wb';
            case 'wav': return 'audio/x-wav';
            case 'mp3': return 'audio/mp3';
            case 'm4a': return 'audio/m4a';
            case 'mid': return 'audio/midi';
            case 'spx': return 'audio/x-speex';

            case 'jpg': return 'image/jpeg';
            case 'gif': return 'image/gif';
            case 'png': return 'image/png';

            case 'wmv': return 'video/wmv';
            case 'm4v': return 'video/m4v';
            case 'mp4': return 'video/mp4';
            case '3gp': return 'video/3gp';

            default: return 'unknown';
        }
    }

   
    /**
     * Given an address string, this method converts that string to an array
     * of 'acceptable' strings that can be used by ATT's API.
     *
     * @param string $addrStr address string
     * 
     * @return array an array of address strings
     * @throws InvalidArgumentException if address string contains invalid 
     * addresses.
     */
    public static function convertAddresses($addrStr) 
    {
        /* TODO: Clean this up */

        $addresses = explode(',', $addrStr);
        $encodedAddr = array(); 
        foreach ($addresses as $addr) {
            $cleanAddr = str_replace('-', '', $addr);
            $cleanAddr = str_replace('tel:', '', $cleanAddr);
            $cleanAddr = str_replace('+1', '', $cleanAddr);
            if (preg_match("/\d{10}/", $cleanAddr)) {
                $encodedAddr[] = 'tel:' . $cleanAddr;
            } else if (preg_match("/^[^@]*@[^@]*\.[^@]*$/", $cleanAddr)) {
                $encodedAddr[] = $cleanAddr;
            } else if (preg_match("/\d[3-8]/", $cleanAddr)) {
                $encodedAddr[] = 'short:' . $cleanAddr;
            } else {
                throw new InvalidArgumentException('Invalid address: ' . $addr);
            }
        }

        return $encodedAddr;
    }

}
?>
